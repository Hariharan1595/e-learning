import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Programs from "./Components/Programs/programs"
import Title from "./Components/Title/Title"
import Aboutus from "./Components/AboutUs/Aboutus"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import ViedoPlayer from "./Components/videoPlayer/ViedoPlayer"
import { useState } from "react"


function App() {
  const [playState,setPlayState] = useState(false)
  

  return (
    <div>
       <Navbar/>
      <Hero/>
      <div className="container">
        <Title title = 'what we offers' subtitle ='our programs'/>
        <Programs/>
        <Aboutus setPlayState={setPlayState}/>
        <Title subtitle = 'gallery' title ='campus photo'/>
        <Campus/>
        <Title subtitle = 'contact us' title ='get in touch'/>
        <Contact/>
        <Footer/>
      </div>
      <ViedoPlayer playState={playState} setPlayState={setPlayState}/>

    </div>
    
  
     
      
    
  )
}

export default App
