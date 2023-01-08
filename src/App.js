import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Navigation  from './components/navigation/Navigation'
import Home from './components/homepage/Home';
import Products from './components/Products/Products';
import Cart from './components/cart/Cart';
function App() {
  return (
    <>
    <BrowserRouter >
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/cart' element={<Cart />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
