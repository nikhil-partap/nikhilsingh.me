import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './hooks/ScrollToTop.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop />
      <Header />
      {<Outlet />}
      <Footer />
    </>
  )
}

export default App
