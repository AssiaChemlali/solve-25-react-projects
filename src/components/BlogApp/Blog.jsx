import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import AddPost from './AddPost'
import Navbar from './Navbar'
import ListPosts from './ListPosts'
import axios from 'axios'

const Blog = () => {

  const[blog,setBlog]=useState([])

async function fetchListOfBlogs(){
  const response = await axios.get("http://localhost:5173/api/blogs");
  const result = await response.data;
  if(result){
    setBlog(result)
  }
}
 async function handleAddPost(newPost){
    setBlog(prevBlog=>{
      return[...prevBlog,newPost]
    })

   

  }

  function handleEditPost(editpost){
    const updateblog=blog.map((item)=>{
     return item.id===editpost.id ? editpost :item
    })
    setBlog(updateblog)
   
  }

   function handleDeletePost(id){
    const updateblog=blog.filter((item)=> item.id!==id )
     setBlog(updateblog)
     console.log(updateblog)
   }



  return (
 
      <div className='p-10 font-serif'>
        <Navbar />
       
        <Routes>
          <Route  
          path="/" 
          element={<ListPosts 
          blog={blog} 
          onDelete={handleDeletePost}/>}/>
          <Route  
          path="/add" 
          element={<AddPost 
          onAdd={handleAddPost} 
          onEdit={handleEditPost}/>}/>
        </Routes>
      </div>
  
  )
}

export default Blog
