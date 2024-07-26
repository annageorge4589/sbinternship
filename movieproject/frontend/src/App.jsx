import './App.css'
import  Navbar from './components/Navbar'
import View from './components/View'
import  Add  from './components/Add'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <h1>Movie Tickets Booking</h1>
     <Navbar/>
     <Routes>
      <Route path='/' element={<View/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
     </Routes>
     
    </>
  )
}

export default App
