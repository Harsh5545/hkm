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
import Jewellery from './pages/Course/CoursePages/Jewellery';
import Architectural from './pages/Course/CoursePages/Architectural';
import VideoEditing from './pages/Course/CoursePages/VideoEditing';
import Animation3D from './pages/Course/CoursePages/Animation3D';
import VisualEffect from './pages/Course/CoursePages/VisualEffect';
import Animation2D from './pages/Course/CoursePages/Animation2D';
import GraphicsDesign from './pages/Course/CoursePages/GraphicsDesign';
import PGA from './pages/Course/CoursePages/PGA';
import PGD from './pages/Course/CoursePages/PGD';

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
        <Route path="/course/game-design" element={<GameDesign />} />
        <Route path='/course/3d-jewelry-design' element={<Jewellery />} />
        <Route path='/course/3d-architectural' element={<Architectural />} />
        <Route path='/course/video-editing' element={<VideoEditing />} />
        <Route path='/course/3d-animation' element={<Animation3D />} />
        <Route path='/course/visual-effect' element={<VisualEffect />} />
        <Route path='/course/2d-animation' element={<Animation2D />} />
        <Route path='/course/graphics-design' element={<GraphicsDesign />} />
        <Route path='/course/graphics-animation-program' element={<PGA />} />
        <Route path='/course/game-design-program' element={<PGD/>}/>
      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;
