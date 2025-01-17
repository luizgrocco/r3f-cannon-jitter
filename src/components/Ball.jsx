import { Sphere } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";

export default function Ball({ position, radius }) {
  const [ref] = useSphere(() => ({
    mass: 1,
    position,
    args: [radius],
    material: {
      restitution: 0.9, // Bounciness (0 = no bounce, 1 = very bouncy)
    },
    allowSleep: true, // Enable sleeping
    sleepTimeLimit: 0.5, // Time in seconds before the object can sleep
    sleepSpeedLimit: 0.1, // Speed below which the object is considered stationary
  }));

  console.log(ref);

  return (
    <Sphere ref={ref} args={[radius, 32, 32]}>
      <meshStandardMaterial color={`hsl(${Math.random() * 360}, 80%, 50%)`} />
    </Sphere>
  );
}
