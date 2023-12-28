import { useState } from 'react'
import {BrowserRouter, Route, Routes} from"react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Header from './component/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path='/' element = {<Home/>}/>
        <Route  path='/about' element = {<About/>}/>
        <Route  path='/sign-in' element = {<SignIn/>}/>
        <Route  path='/sign-up' element = {<SignUp/>}/>
        <Route  path='/profile' element = {<Profile/>}/>

      </Routes>
      </BrowserRouter>
   
    </>
  )
}

//password admin1234!@#$
//confirm admin1234!@#$
// code 863512

//mongodb+srv://admin:admin@mern-estate.hpi95qr.mongodb.net/?retryWrites=true&w=majority
export default App
