import { Center } from "@react-three/drei";
import React from "react";
import Canvas from "../canvas/Canvas";
import Arrow from "../shapes/Arrow";
import Box from "../shapes/Box";
import Wireframe from "../materials/Wireframe";
import Icosahedron from "../shapes/Icosahedron";
import GradientBlob from "../materials/GradientBlob";
const boxes = [];

const Blocks = () => {
  console.log(Wireframe.props);
  return (
    <Canvas color="white" zoom={10}>
      <group position={[0, 0, 0]} rotation={[0, (45 * Math.PI) / 180, 0]}>
        <Center>
          <Box width={4} height={4} depth={4} />
          <Box width={2.5} height={3} position={[0.75, -0.5, 2.5]} />
          <Box width={3} height={2} position={[-0.5, 3, -1]} />
          <Box width={2} depth={3} position={[3, -1.5, -2]} />
          <Box width={3} depth={3} height={3} position={[-2.5, -0.5, -3.5]} />
          <Box position={[-2.5, -1.5, 2.5]} />
          <Box depth={2} width={3} height={5} position={[-3.5, 0.5, 0.5]} />
        </Center>{" "}
      </group>
    </Canvas>
  );
};

export default Blocks;
