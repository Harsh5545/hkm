// // AnimatedModel.js
// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { BoxBufferGeometry, MeshStandardMaterial } from 'three';

// const Cube = () => {
//   const meshRef = useRef();

//   useFrame(() => {
//     if (meshRef.current) {
//       // Rotate the cube slowly
//       meshRef.current.rotation.x += 0.01;
//       meshRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <mesh ref={meshRef} geometry={new BoxBufferGeometry(1, 1, 1)} material={new MeshStandardMaterial({ color: 'blue' })} />
//   );
// };

// const AnimatedModel = () => {
//   return (
//     <div className="border p-8">
//       <Canvas>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <Cube />
//       </Canvas>
//     </div>
//   );
// };

// export default AnimatedModel;
