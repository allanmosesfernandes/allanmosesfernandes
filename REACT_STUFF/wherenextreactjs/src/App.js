import './App.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import {Routes, Route} from 'react-router-dom'
function App() {


  const About = () => {
    return(
      <h2>Loda Lasson</h2>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index={true} element={<Hero />} />
        <Route path='about'element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
