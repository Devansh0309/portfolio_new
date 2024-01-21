"use client"
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutStellar from './components/AboutStellar'
import Recommendations from './components/Recommendations'
import Contacts from './components/Contacts'

export default function Home() {
  return (
    <div className="home-content">
      <Navbar/>
      <AboutStellar/>
      <Header/>
      <Recommendations/>
      <Contacts/>
    </div>
  )
}
