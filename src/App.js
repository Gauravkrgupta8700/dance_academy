
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import VideoGallery from './Components/VideoGallery/videoGallery';
import JoinUs from './Components/joinUs/joinUs';
function App() {
  return (
    <div className="App">
     <Navbar/>
    <Slider/>
  <Gallery/>
  <JoinUs />
  <VideoGallery/>
  <About/>
  <Footer/>
    </div>
  );
}

export default App;
