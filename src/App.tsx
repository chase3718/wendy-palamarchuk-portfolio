import './App.css';
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="aboutMe" element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
