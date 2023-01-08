import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Navigation  from './components/navigation/Navigation'
import Home from './components/homepage/Home';
function App() {
  return (
    <>
    <BrowserRouter >
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
