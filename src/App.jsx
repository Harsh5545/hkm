import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/About/Aboutus';
import Course from './pages/Course/Course';
import StudentProject from './pages/StudentProject/StudentProject';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import GameDesign from './pages/Course/CoursePages/GameDesign';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/course" element={<Course />} />
      <Route path="/student-project" element={<StudentProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/game-design" element={<GameDesign />} />
      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;
