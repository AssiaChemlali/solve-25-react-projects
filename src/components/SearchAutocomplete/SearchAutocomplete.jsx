import React, { useEffect, useRef, useState } from 'react'

const SearchAutocomplete = () => {
  const [users, setUsers] = useState([])
  const [namesMatched, setNameMatched] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function getData() {
    setLoading(true)
    try {
      const url = `https://dummyjson.com/users/`
      const response = await fetch(url)
      const data = await response.json()
      if (data?.users?.length) {
        setUsers(data.users.map((userItem => userItem.firstName)))
        setLoading(false)
      }

    } catch (error) {
      console.log(error)
      setLoading(true)
    }

  }

  useEffect(() => {
    getData()

  }, [])

  function handleChange(event) {
    const searchWords = event.target.value
    setInput(searchWords)

    if (users.length > 0 && searchWords.length > 0) {
      const names = users.filter(userName => userName.toLowerCase().startsWith(searchWords.toLowerCase()))
      setNameMatched(names)
    } else {
      setNameMatched([])
    }

  }

  function handleClick(event){
     setInput(event.target.innerText)
     setNameMatched([])
  }

if(loading){
  return <p>Loading data ...</p>
}
  return (
    <div className='flex flex-col p-10 '>
      <input
        type="text"
        name="name"
        className='border border-2 p-3 border-black mb-5'
        placeholder='Enter Name '
        value={input}
        onChange={handleChange}
      />
      {
        namesMatched?.length > 0 && (
          <ul className='text-left'>
            {namesMatched?.map((name,index) => {
              return (<li
                onClick={handleClick}
                key={index}>
                {name}
              </li>)
            })}
          </ul>
        )
      }
    </div>
  )
}

export default SearchAutocomplete
