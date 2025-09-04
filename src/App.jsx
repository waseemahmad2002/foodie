import Home from './Components/Home'
import './App.css'
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
function App() {

  return (
    <div className='App'>
      <Home />
      <About />
      <Work />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App;
