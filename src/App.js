import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Navigation  from './components/navigation/Navigation'
import Home from './components/homepage/Home';
import Products from './components/Products/Products';
import Cart from './components/cart/Cart';
import {useEffect, useState} from 'react'


function App() {
  const [data,setData]=useState([])
    useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data=>setData(data.products) );
  },[])
  return (
    <>
    <BrowserRouter >
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Products data={data}/>}/>
      <Route path='/cart' element={<Cart />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
