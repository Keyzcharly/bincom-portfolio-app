import React from 'react'
import Header from './component/Head/Header'
import './App.css'
import Home from './component/Hero/Home'
import Features from './component/Features/Features'
import Portfolio from './component/Portfolio/Portfolio'
import Footer from './component/Footer'
import Resume from './component/Resume/Resume'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Footer />
    </>
  )
}

export default App