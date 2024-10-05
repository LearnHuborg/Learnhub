import { Divider } from '@mui/material'
import './App.css'
import Header from './components/home/header'
import HeroSection from './components/home/hero-section'
import { Home } from './components/home/page'

function App() {

  return (
    <div className='flex flex-col gap-[2rem] pt-8'>
      <Home/>
    </div>
  )
}

export default App
