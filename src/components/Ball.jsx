import { Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Ball({ position, radius }) {
  const [color, setColor] = useState(`hsl(${Math.random() * 360}, 80%, 50%)`);

  return (
    <RigidBody
      canSleep
      restitution={0.95}
      position={position}
      colliders="ball"
      onSleep={() => setColor("#c0c0c0")}
    >
      <Sphere args={[radius, 32, 32]}>
        <meshStandardMaterial color={color} />
      </Sphere>
    </RigidBody>
  );
}
