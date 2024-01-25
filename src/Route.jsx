// dynamicRoutesData.js
import { lazy } from "react";

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


const dynamicRoutes = [
  { name: "Game Design", slug: "game-design", component: GameDesign },
  { name: "3D Jewelry Design", slug: "3d-jewelry-design", component: Jewellery },
  { name: "3D Architectural", slug: "3d-architectural", component: Architectural },
  { name: "Video Editing", slug: "video-editing", component: VideoEditing },
  { name: "3D Animation", slug: "3d-animation", component: Animation3D },
  { name: "Visual Effect", slug: "visual-effect", component: VisualEffect },
  { name: "2D Animation", slug: "2d-animation", component: Animation2D },
  { name: "Graphics Design", slug: "graphics-design", component: GraphicsDesign },
  { name: "Graphics Animation Program", slug: "graphics-animation-program", component: PGA },
  { name: "Game Design Program", slug: "game-design-program", component: PGD },
 
];

export default dynamicRoutes;
