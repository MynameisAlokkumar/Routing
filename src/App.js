
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Support } from './Components/Support';
import { Notfound } from './Components/Notfound';
import { Link } from 'react-router-dom';
import { MainHeader } from './Components/MainHeader';

function App() {
  return (
    <div className="App">

         <nav>
        <ul>
         
          <li>
           <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink> 
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink> 
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink> 
          </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<MainHeader />} >
          {/* SET default  page as home */}
          <Route index element={Home}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Support" element={<Support />} />
        <Route path="*" element={<Notfound />} />//Not found page ke liye * path me use krte hai
        </Route>
    </Routes>
    </div>
  );
}

export default App;
