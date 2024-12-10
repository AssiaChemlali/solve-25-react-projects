import React from 'react'
import PostCard from './PostCard'
const ListPosts = ({blog,onDelete}) => {


  return (

    <>
     <h3 className='text-xl font-bold mb-10 capitalize'>latest articles</h3>
     {
      blog.length >0 ?(
      <div className='grid sm:grid-cols-3 gap-3'>
        {
          blog?.map((post)=>{
          return (
              <PostCard 
              key={post.id} 
              post={post} 
              onDelete={onDelete}/>
          )
          })
        }
    </div>) 
    : (<p className=''>No posts here , please add once </p>)
     }
   
    
    </>
    
  )
}

export default ListPosts
