import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Card_main from './components/Card_main';
import About from './components/About';
import Personal_accompolishment from './components/Personal_accompolishment';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Card_main/>
    <Technologies/>
    <About/>
    <Personal_accompolishment/>
    <Footer/>
    </>
  );
}

export default App;



