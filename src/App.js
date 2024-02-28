import Contact from './Contact';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ImageDisplay from './ImageDisplay';
import Navbar from './Navbar';



export default function App() {
  return ( 
 
    <Router>
      <div>
        <Navbar />
      </div>
      


      <Routes>
        <Route exact path='/' element = {<Home />}/>
        <Route path = '/contact' element = {<Contact />} />
        <Route path='/image/:id' element = {<ImageDisplay />} />
      </Routes>
      


    
    </Router>
   
  )
}