/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Scene from "./components/Scene";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Suspense>
        <Physics gravity={[0, -9.82, 0]}>
          <Scene />
        </Physics>
      </Suspense>

      <OrbitControls enableDamping={true} dampingFactor={0.1} />
    </Canvas>
  );
}
