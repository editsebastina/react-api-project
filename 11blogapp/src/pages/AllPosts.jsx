import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'

function AllPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    appwriteService.getposts().then((posts) => {
      if(posts) {
        console.log('Displaying posts:', posts)
        setPosts(posts.documents)
      }
    })
  }, [])

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="w-1/4 p-2" key={post.$id}>
                <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts