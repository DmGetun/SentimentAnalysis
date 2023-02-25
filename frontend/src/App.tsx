import { useState } from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Content from './components/Content/content'

import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className='h-screen w-screen'>
      <Header />
        <Routes>
          <Route path='/' element={<Content />}>
            <Route path='about' element={<Content />} />
            <Route path='resources' element={<Content />} />
          </Route>
        </Routes>
      <Footer />
    </div>  
  )
}

export default App
