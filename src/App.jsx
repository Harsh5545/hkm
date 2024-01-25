import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import dynamicRoutes from "./Route";
const Home = lazy(() => import("./pages/Home/Home"));
const Aboutus = lazy(() => import("./pages/About/Aboutus"));
const Course = lazy(() => import("./pages/Course/Course"));
const StudentProject = lazy(() =>
  import("./pages/StudentProject/StudentProject")
);
const Contact = lazy(() => import("./pages/Contact/Contact"));
const generatedRoutes = dynamicRoutes.map((route) => {
  return {
    path: `/course/${route.slug}`,
    element: (
      <Suspense fallback={<Loader />}>
        {React.createElement(route.component)}
      </Suspense>
    ),
  };
});

const Staticroutes = [
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
];
const allRoutes = [...Staticroutes, ...generatedRoutes];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {allRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
