import React, { useEffect } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
// import Wraith from "./Wraith";
import { PerspectiveCamera } from "@react-three/drei";
import Wsa from "./Wattson_Strange_Attractor";

const Experience = () => {

    return (
    <>
      <OrbitControls
        enableZoom={true}
        // minPolarAngle={Math.PI / 8}
        // maxPolarAngle={Math.PI / 1.2}
        minDistance={50}
        maxDistance={150}
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
        position={[60,0,20]}
      />


      <group position={[0,-5,0]}>
        <Wsa />
      </group>
    </>
  );
};

export default Experience;

{/* <PerspectiveCamera
makeDefault
position={[60,0,20]}
/>

<group position={[0,-20,4]}>
<Wsa />
</group> */}