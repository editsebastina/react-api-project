import {useState, useEffect } from 'react'

function MyComponent(){

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https//:api.mydata.com/data')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error loading data :', error));
    }, []) // Empty array means the effect runs only once after initial render

    return(
        <div>
            {data ? 
                (<ul>
                    {data.map(item =>
                            <li key={item.id}>{item.name}</li>
                    )}
                </ul>) : (<p>Loading data...</p>
                )}
        </div>
    );
}

export default MyComponent()