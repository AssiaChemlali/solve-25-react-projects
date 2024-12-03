import React, { useEffect, useState } from 'react'

const  useFetch = (url) => {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    async function getData() {
      try {
          setLoading(true)
          const response= await fetch(url)
          const result=await response.json()
          if(result && result.products){
            setData(result.products)
            setLoading(false)
            setError(null)
          }
        } catch (e) { 
          setError(e)
          setLoading(false)
        }
       
    }
     
    useEffect(()=>{ 
        getData()
    },[url])

  return  {data,loading,error}
}

export default useFetch
