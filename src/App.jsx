import { useState } from 'react'
import 'flowbite/dist/flowbite.css'
import './App.css'
import { Header_Nav } from './components/Header_Nav'
import Home from './components/Home'
import { Abouts } from './components/Abouts'
import { Contact } from './components/Contact'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'



function App() {

  return (
    <>
      <Header_Nav/>
      <Home/>
      <Abouts/>
      <Cart/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
