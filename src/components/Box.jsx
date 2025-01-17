import React from "react";
import { useBox } from "@react-three/cannon";

export default function Box() {
  // Create the bottom plane (floor)
  useBox(() => ({
    args: [10, 0.1, 10],
    position: [0, -5, 0],
    type: "Static",
  }));

  // Wall properties
  const wallProps = [
    { position: [0, 0, -5], args: [10, 10, 0.1] }, // Back wall
    { position: [0, 0, 5], args: [10, 10, 0.1] }, // Front wall
    { position: [-5, 0, 0], args: [0.1, 10, 10] }, // Left wall
    { position: [5, 0, 0], args: [0.1, 10, 10] }, // Right wall
  ];

  return (
    <>
      {/* Transparent walls */}
      {wallProps.map((props, i) => (
        <mesh key={i} position={props.position}>
          <boxGeometry args={props.args} />
          <meshBasicMaterial
            color="green"
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}

      {/* Cannon.js walls */}
      {wallProps.map((props, i) => (
        <React.Fragment key={i}>
          <Wall position={props.position} args={props.args} />
        </React.Fragment>
      ))}
    </>
  );
}

function Wall({ position, args }) {
  useBox(() => ({
    args,
    position,
    type: "Static", // Static so it doesn't move
  }));
  return null;
}
