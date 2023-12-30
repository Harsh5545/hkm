import React from "react";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        color={'blue'}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default Experience;
