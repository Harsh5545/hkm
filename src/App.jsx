import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";

import Footer from "./components/Footer/Footer";

// Lazy-loaded components
const GameDesign = lazy(() => import("./pages/Course/CoursePages/GameDesign"));
const Jewellery = lazy(() => import("./pages/Course/CoursePages/Jewellery"));
const Architectural = lazy(() =>
  import("./pages/Course/CoursePages/Architectural")
);
const VideoEditing = lazy(() =>
  import("./pages/Course/CoursePages/VideoEditing")
);
const Animation3D = lazy(() =>
  import("./pages/Course/CoursePages/Animation3D")
);
const VisualEffect = lazy(() =>
  import("./pages/Course/CoursePages/VisualEffect")
);
const Animation2D = lazy(() =>
  import("./pages/Course/CoursePages/Animation2D")
);
const GraphicsDesign = lazy(() =>
  import("./pages/Course/CoursePages/GraphicsDesign")
);
const PGA = lazy(() => import("./pages/Course/CoursePages/PGA"));
const PGD = lazy(() => import("./pages/Course/CoursePages/PGD"));
const Home = lazy(() => import("./pages/Home/Home"));
const Aboutus = lazy(() => import("./pages/About/Aboutus"));
const Course = lazy(() => import("./pages/Course/Course"));
const StudentProject = lazy(() =>
  import("./pages/StudentProject/StudentProject")
);
const Contact = lazy(() => import("./pages/Contact/Contact"));

// Route configuration array
const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        {" "}
        <Home />{" "}
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loader />}>
        {" "}
        <Aboutus />{" "}
      </Suspense>
    ),
  },
  {
    path: "/course",
    element: (
      <Suspense fallback={<Loader />}>
        {" "}
        <Course />
      </Suspense>
    ),
  },
  {
    path: "/student-project",
    element: (
      <Suspense fallback={<Loader />}>
        {" "}
        <StudentProject />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<Loader />}>
        {" "}
        <Contact />{" "}
      </Suspense>
    ),
  },
  {
    path: "/course/game-design",
    element: (
      <Suspense fallback={<Loader />}>
        <GameDesign />
      </Suspense>
    ),
  },
  {
    path: "/course/3d-jewelry-design",
    element: (
      <Suspense fallback={<Loader />}>
        <Jewellery />
      </Suspense>
    ),
  },
  {
    path: "/course/3d-architectural",
    element: (
      <Suspense fallback={<Loader />}>
        <Architectural />
      </Suspense>
    ),
  },
  {
    path: "/course/video-editing",
    element: (
      <Suspense fallback={<Loader />}>
        <VideoEditing />
      </Suspense>
    ),
  },
  {
    path: "/course/3d-animation",
    element: (
      <Suspense fallback={<Loader />}>
        <Animation3D />
      </Suspense>
    ),
  },
  {
    path: "/course/visual-effect",
    element: (
      <Suspense fallback={<Loader />}>
        <VisualEffect />
      </Suspense>
    ),
  },
  {
    path: "/course/2d-animation",
    element: (
      <Suspense fallback={<Loader />}>
        <Animation2D />
      </Suspense>
    ),
  },
  {
    path: "/course/graphics-design",
    element: (
      <Suspense fallback={<Loader />}>
        <GraphicsDesign />
      </Suspense>
    ),
  },
  {
    path: "/course/graphics-animation-program",
    element: (
      <Suspense fallback={<Loader />}>
        <PGA />
      </Suspense>
    ),
  },
  {
    path: "/course/game-design-program",
    element: (
      <Suspense fallback={<Loader />}>
        <PGD />
      </Suspense>
    ),
  },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
