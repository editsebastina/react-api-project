import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/editsebastina');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 text-3xl text-center text-white bg-gray-600">
      Github Account Holder: {data.name} 
      <img src={data.avatar_url} width={300} alt="avatar"/>
    </div>
  );
}

export default Github;


// Github.js
// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// function Github() {
//   const data = useLoaderData();

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4 text-3xl text-center text-white bg-gray-600">
//       Github Account Holder: {data.name} 
//       <img src={data.avatar_url} width={300} alt="avatar"/>
//     </div>
//   );
// }

// export default Github;

// export const githubInfoLoader = async () => {
//   const response = await fetch('https://api.github.com/users/editsebastina');
//   const data = await response.json();
//   return data;
// };
