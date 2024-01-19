
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutStellar from './components/AboutStellar'
import Recommendations from './components/Recommendations'

export default function Home() {
  return (
    <div className="home-content">
      <Navbar/>
      <Header/>
      <AboutStellar/>
      <Recommendations/>
    </div>
  )
}
