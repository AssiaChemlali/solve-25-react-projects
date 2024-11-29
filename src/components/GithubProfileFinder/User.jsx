import React from 'react'

const User = ({userGithub}) => {
  const date =new Date(userGithub.created_at)
  return (
    <div className='mt-5 border border-black w-[600px] p-10 flex flex-col justify-center items-center rounded'>
    <img src={userGithub.avatar_url} alt=""  className='w-[100px] h-[100px] rounded-full'/>
    <a href={userGithub.html_url}>
      {userGithub.login}</a>
    <ul className='font-bold text-xl text-center space-y-2 mt-3'>
      <li>User Joined on {`${date.getDate() } ${date.toLocaleString("en-us",{month:"short"})} ${date.getFullYear() }`} </li>
      <li>Public Repos:{userGithub.public_repos}</li>
      <li>Followers:{userGithub.followers}</li>
      <li>Following:{userGithub.following }</li>
    </ul>
  </div>
  )
}

export default User
