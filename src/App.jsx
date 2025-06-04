import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Navbars from './components/Navbar/Navbar'
import Mycontext from './context/Mycontext'
import FetchApi from './context/FetchApi'
import Filter from './components/Filter/Filter'
import MovieList from './components/MovieList/MovieList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Moredetails from './components/MoreComponents/Moredetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchApi>

        <BrowserRouter>
          <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/moredetails/:movieId' element={<Moredetails/>}/>
          </Routes>
        </BrowserRouter>

    
        
      </FetchApi>
    </>
  )
}

export default App
