/* eslint-disable react/no-unknown-property */
import { RigidBody } from "@react-three/rapier";

const THICKNESS = 0.1;
const LADO_SIZE = 15;

// eslint-disable-next-line react/prop-types
export default function Box({ position }) {
  // Wall properties
  const wallProps = [
    {
      position: [0, 0, -LADO_SIZE / 2],
      args: [LADO_SIZE, LADO_SIZE, THICKNESS],
    }, // Back wall
    {
      position: [0, 0, LADO_SIZE / 2],
      args: [LADO_SIZE, LADO_SIZE, THICKNESS],
    }, // Front wall
    {
      position: [-LADO_SIZE / 2, 0, 0],
      args: [THICKNESS, LADO_SIZE, LADO_SIZE],
    }, // Left wall
    {
      position: [LADO_SIZE / 2, 0, 0],
      args: [THICKNESS, LADO_SIZE, LADO_SIZE],
    }, // Right wall
  ];

  return (
    <RigidBody
      type="fixed"
      mass={1} // The box will have mass
      position={position} // Initial position of the box
      colliders="hull" // Use hull collider to fit the box without top
    >
      {/* Bottom face */}
      <mesh position={[0, -LADO_SIZE / 2, 0]}>
        <boxGeometry args={[LADO_SIZE, THICKNESS, LADO_SIZE]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>

      {/* Wall faces */}
      {wallProps.map(({ position, args }, index) => (
        <mesh key={index} position={position}>
          <boxGeometry args={args} />
          <meshStandardMaterial transparent wireframe />
        </mesh>
      ))}
    </RigidBody>
  );
}
