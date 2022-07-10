import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Welcome from "./components/Welcome";
import Slider from "./components/Slider";
import './App.css'


const App = () => {
    
    return (
    <div className="custom-container">
        
      <Navbar />
      <Slider />
      <Welcome />
      <Services />
      <Footer />
       
    </div>
  ) 
}

export default App