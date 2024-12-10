import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
const AddPost = ({onAdd,onEdit}) => {

  const titleRef=useRef()
  const descRef=useRef()
  const navigate=useNavigate()
  const {state}=useLocation()
  const [isddedPost,setIsAddedPost]=useState()
  const [post,setPost]=useState({})

    useEffect(()=>{
      if(state ){
        setIsAddedPost(false)
        setPost(state)
        titleRef.current.value=state.title    
        descRef.current.value=state.desc

      } else{
        setIsAddedPost(true)
      }
    },[])

  function hnadleAddPost(e){
    
    e.preventDefault()
    const title=titleRef.current.value
    const desc=descRef.current.value
    const id=Math.random()
    if( isddedPost){
      onAdd({id,title,desc})
    }else{
      const id=post.id
      onEdit({id,title,desc})
    }
     navigate('/')
  }

  return (
    <form className='flex flex-col gap-3' onSubmit={hnadleAddPost} >
      <h2 className='text-xl font-bold capitalize'> Add a new post</h2>
      <p>Title</p>
      <input 
        type="text" 
        name="title" 
        ref={titleRef}
        className='border p-2'
      />
      <p>Description</p>
      <textarea 
     
      name="desc" id="" rows="5" ref={descRef} className='border p-2'></textarea>
      <button type="submit" className='capitalize bg-black text-white p-3 font-bold hover:bg-red-500'>
        {isddedPost  ? 'add post':'edit post'}
        
        </button>
    </form>
  )
}

export default AddPost
