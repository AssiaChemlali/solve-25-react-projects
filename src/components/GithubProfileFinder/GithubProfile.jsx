import React, { useEffect, useState } from 'react'
import User from './User'

const GithubProfile = () => {
  const [input,setInput]=useState('AssiaChemlali')
  const [userGithub,setUserGithub]=useState(null)
  const [loading,setLoading]=useState(false)

  async function getUserGithub(){
    setLoading(true)
      const url=`https://api.github.com/users/${input}`
      try {
        const response= await fetch(url)
        const data= await response.json()
        if(data){
           setUserGithub(data)
           setLoading(false)
           setInput('')
        }
       
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    getUserGithub()
  },[])

  function handleSearch(){
    getUserGithub() 
  }

  if (loading) {
      return <h1 className='text-red-400'>Loading data ! Please wait</h1>;
    }

  return (
    <div className='flex  flex-col items-center justify-center p-10 '>
      <div className='flex flex-row gap-x-2'>
        <input 
        type="text" 
        name="github" 
        className='border p-3 rounded' 
        placeholder='Enter Github User ...'
        value={input} 
        onChange={(e)=>setInput(e.target.value)}/>
      
        <button 
        onClick={handleSearch}
        className='bg-yellow-500 text-white p-3 rounded font-bold'>Search</button>
      </div>

        {userGithub!==null  &&(<User userGithub={userGithub}/>)
       }
      

    </div>
  )
}

export default GithubProfile
