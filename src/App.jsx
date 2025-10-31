// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Register from './pages/Register';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/programs' element={<Programs />} />
          <Route path="/register" element={<Register />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
