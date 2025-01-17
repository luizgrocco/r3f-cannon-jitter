import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Scene from "./components/Scene";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Physics gravity={[0, -9.82, 0]} allowSleep stepSize={1 / 120}>
        <Scene />
      </Physics>

      <OrbitControls enableDamping={true} dampingFactor={0.1} />
    </Canvas>
  );
}
