import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutStellar from "./components/AboutStellar";
import Recommendations from "./components/Recommendations";
import FixedBottomNavigation from "./elements/BottomNavigation";

export default function Home() {
  
  return (
    <div className="home-content">
      <Navbar />
      <AboutStellar />
      <Header />
      <Recommendations />
      <FixedBottomNavigation />
    </div>
  );
}
