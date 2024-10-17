import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/Home"
import Hero from "./sticky/Hero"
import Contact from "./sticky/Contact"
import Footer from "./sticky/Footer"
import About from "./component/About"
import Advanced from "./component/Advanced"
import Consumable from "./component/Consumable"
import Unified from "./component/Unified"
import Computing from "./component/Computing"
import Connectivity from "./component/Connectivity"

function App() {
  

  return (
    <Router>
      <Hero/>
      
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<About/>}></Route>
      <Route path="/advanced" element={<Advanced/>}/>
      <Route path="/consumable" element={<Consumable/>}/>
      <Route path="/unified" element={<Unified/>}/>
      <Route path="/connectivity" element={<Connectivity/>}/>
      <Route path="/computing" element={<Computing/>}/>
     </Routes>
     <Contact/>
     <Footer/>
    </Router>
  )
}

export default App
