import { useEffect, useState, useRef  } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com'

interface Post {
    id: number;
    title: string;
}

export default function Demo(){
    const [posts, setPosts] = useState<Post[]>([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState();

    const abortControllerRef = useRef<AbortController | null>(null);

    const [page, setPage] = useState(0);

    useEffect(() => { 
        const fetchPosts = async () => {
            abortControllerRef.current?.abort; // abort api call if it's already in progress
            abortControllerRef.current = new AbortController(); // create new abort controller and assigning it to the ref

            setIsLoading(true);

            try {
                const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
                    signal: abortControllerRef.current?.signal,
                });
                const posts = (await response.json()) as Post[];
                setPosts(posts);
            } catch (error: any) {
                if (error.name = 'AbortError') { 
                    console.log('Aborted');
                    return;
                } // ignore abort error
                setError(error);
            } finally {
                setIsLoading(false);
            }
            
        }
        fetchPosts();
    }, [page]);

    // if(isLoading){
    //     return <div>Loading...</div>
    // }

    if(error){
        return <div>Something went wrong! Please try again. Error: {error}</div>
    }

    return (
        <div className="tutorial">
            <h1 className="mb-4 text-2xl">Data Fetching in React</h1>
            <button className="px-4 py-4 text-white bg-blue-700 border rounded-md" onClick={() => setPage(page + 1)}>Load time:  ({page})</button>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )

}