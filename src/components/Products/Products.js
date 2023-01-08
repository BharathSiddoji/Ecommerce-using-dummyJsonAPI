import React from 'react'
import './products.css'

import {useEffect,useState} from 'react'
const Products = () => {
  const [data,setData]= useState('')
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://dummyjson.com/products')
      const resData = await response.json()
      setData(await resData)
    }
    fetchData()
    console.log(data)
  },[])
  return (
    <div className='product__page'>
      
    </div>
    
  )
}

export default Products