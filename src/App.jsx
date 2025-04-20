 import './App.css' 
import Home from './pages/home'
import Navbar from './components/Navbar'
import Login from './pages/login'
import Men from './pages/men'
import {Routes, Route, useNavigate} from 'react-router-dom'

function App() {
 
  return (
    <>
    < Navbar /> 
    <div className="pt-20 px-4 mt-2">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/men" element={< Men />}/>
       </Routes>    
    </div>
    </>
  )
}

export default App
