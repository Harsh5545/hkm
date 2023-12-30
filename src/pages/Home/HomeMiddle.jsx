import React from "react";
import { courseData } from "../../helpers/Constant";
import { Canvas } from "@react-three/fiber";
import Experience from "../../components/Experience/Experience";
function HomeMiddle() {
  return (
    <div className="h-[100%] w-[100%]">

    <Canvas>
      <Experience/>
  </Canvas>
    </div>
  );
}

export default HomeMiddle;
