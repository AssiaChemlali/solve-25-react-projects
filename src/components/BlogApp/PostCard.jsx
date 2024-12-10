import React from 'react'
import { useNavigate,Link} from 'react-router-dom'
const PostCard = ({post,onDelete}) => {
  const navigate=useNavigate()

 function handleDeletePost(){
  onDelete(post.id)
 }

  return (
    <div className='border p-5 rounded-xl shadow drop-shadow'>
      <h2 className='font-bold mb-2 text-xl'>{post?.title}</h2>
      <p>{post?.desc} </p>
      <div className='flex gap-4 mt-3'>
        <Link 
        to={"/addpost" }
        state={post}
        className='font-bold cursor-pointer hover:text-red-500' 
        >
        Edit
        </Link>

        <Link 
        className='font-bold' 
        onClick={handleDeletePost}>Delete</Link>
      </div>
    
    </div>
  )
}

export default PostCard
