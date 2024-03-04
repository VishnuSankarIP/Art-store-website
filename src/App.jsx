
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
