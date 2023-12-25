import { useState } from 'react'
import {BrowserRouter, Route, Routes} from"react-router-dom"
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element = {<Home/>}/>
      </Routes>
      </BrowserRouter>
   
    </>
  )
}

//password admin1234!@#$
//confirm admin1234!@#$
// code 863512
export default App
