import './App.css' 
import Products from './pages/Products'
import Newsletter from './pages/Newsletter'
import Navbar from './components/Navbar'
import {Men, Login, Hero, Women, Kids } from './pages'
import {Routes, Route, useNavigate} from 'react-router-dom'

function App() {
 
  return (
    <  >
    <div className='min-h-screen bg-[#CCCCCC]   '>
    < Navbar /> 
    <div className="pt-20 px-4 mt-2">
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/men" element={< Men />}/>
        <Route path='/women' element={ <Women />}/>
        <Route path="/kids" element={<Kids/>} />
       </Routes>    
    </div>
    < Products />
    < Newsletter />
    </div>
    </>
  )
}

export default App
