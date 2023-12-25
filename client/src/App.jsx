import { useState } from 'react'
import {BrowserRouter, Route, Routes} from"react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element = {<Home/>}/>
        <Route  path='/About' element = {<About/>}/>
        <Route  path='/SignIn' element = {<SignIn/>}/>
        <Route  path='/SignUp' element = {<SignUp/>}/>
        <Route  path='/Profile' element = {<Profile/>}/>

      </Routes>
      </BrowserRouter>
   
    </>
  )
}

//password admin1234!@#$
//confirm admin1234!@#$
// code 863512
export default App
