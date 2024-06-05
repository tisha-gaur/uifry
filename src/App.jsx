import React from 'react'
import Navbar from './components/navbar'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Advantages from './components/advantages'
import Testimonials from './components/testimonials'
import Faq from './components/faq'
import Download from './components/download'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Page1 />
      <Page2 />
      <Advantages />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </div>
  )
}

export default App
