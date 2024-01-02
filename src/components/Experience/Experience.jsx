
import React from "react";
import { OrbitControls } from "@react-three/drei";
// import Wraith from "./Wraith";
import { PerspectiveCamera } from "@react-three/drei";
import Wsa from "./Wattson_Strange_Attractor";

const Experience = () => {
  
    return (
    <>
      <OrbitControls
        // enableZoom={true}
        // minPolarAngle={Math.PI / 8}
        // maxPolarAngle={Math.PI / 1.2}
        // minDistance={40}
        // maxDistance={200}
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
        position={[50,20,10]}
      />

      <group position={[0,-20,0]}>
        <Wsa />
      </group>
    </>
  );
};

export default Experience;
