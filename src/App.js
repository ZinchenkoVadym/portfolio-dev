import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import { UseEffectScroll } from 'react-use-smooth-scroll'
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="App">
        <UseEffectScroll>
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </UseEffectScroll>
    </div>
  );
}

export default App;
