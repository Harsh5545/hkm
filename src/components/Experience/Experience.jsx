
import React from "react";
import { OrbitControls } from "@react-three/drei";
import Wraith from "./Wraith";
import { PerspectiveCamera } from "@react-three/drei";

const Experience = () => {
  
    return (
    <>
      <OrbitControls
        enableZoom={true}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 1.2}
        minDistance={40}
        maxDistance={200}
      />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <PerspectiveCamera
        makeDefault
        position={[80, 20, 150]}
      />

      <group position={[0,0,1]}>
        <Wraith />
      </group>
    </>
  );
};

export default Experience;
