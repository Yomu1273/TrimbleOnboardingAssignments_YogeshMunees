import React, { useEffect, useState } from 'react'
import axios from 'axios';

const HomePage = () => {

  const [content,setContent] = useState([]);

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setContent(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  return (
    <div className='Table'>
      <table className='TableContents'>
        <tr>
          <th className='TableRows'>Name</th>
          <th className='TableRows'>Status</th>
          <th className='TableRows'>Species</th>
          <th className='TableRows'>Gender</th>
          <th className='TableRows'>Image</th>
        </tr>
        {content.map((post) => (
          <tr className='TableRows'>
            <td className='TableRows'>{post.name}</td>
            <td className='TableRows'>{post.status}</td>
            <td className='TableRows'>{post.species}</td>
            <td className='TableRows'>{post.gender}</td>
            <td className='TableRows'><img src={post.image} className='ImageRandM'/></td>
          </tr>
          ))}
      </table>
    </div>
  )
}

export default HomePage