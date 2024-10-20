
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Mapa from './pages/Mapa'
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='/nosotros' element={<About/>}/>
        <Route path='/Ubicacion' element={<Mapa/>}/>
      </Routes>
    </>
  )
}

export default App
