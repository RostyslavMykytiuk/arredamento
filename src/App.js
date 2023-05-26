import {
  Route,
  Routes
} from 'react-router-dom'
import { Welcome } from './components/welcome/Welcome';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import Catalog from './components/catalog/Catalog';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/about_us' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
