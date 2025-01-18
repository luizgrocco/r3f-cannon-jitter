import Ball from "./Ball";
import Box from "./Box";

export default function Scene() {
  return (
    <>
      <Box position={[0, 0, 0]} />
      {Array.from({ length: 150 }, (_, i) => (
        <Ball
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            Math.random() * 5 + 5,
            (Math.random() - 0.5) * 8,
          ]}
          radius={Math.random() * 0.5 + 0.9}
        />
      ))}
    </>
  );
}
