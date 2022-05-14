import { Center } from "@react-three/drei";
import React from "react";
import Canvas from "../canvas/Canvas";
import Arrow from "../shapes/Arrow";
import Box from "../shapes/Box";
import Wireframe from "../materials/Wireframe";
import Icosahedron from "../shapes/Icosahedron";
// const boxes = [
//   [1, 3, -1],
//   [-1, 2, -1],
//   [1, 2, -1],
//   [2, 2, -1],
//   [-1, 1, -1],
//   [0, 1, -1],
//   [1, 1, -1],
//   [2, 1, -1],
//   [-1, 0, -1],
//   [0, 0, -1],
//   [1, 0, -1],
//   [2, 0, -1],
//   [-2, 0, 0],
//   [0, 0, 0],
//   [1, 0, 0],
//   [2, 0, 0],
//   [3, 0, 1],
// ];
import Basic from "../materials/Basic";

const newMaterial = <Basic color="#E0DCC3" edgesColor="black" />;
const boxes = [
  [0, -1, 0],
  [-1, -1, 0],
  [-1, -1, -1],
  [1, -1, 1],
  [0, -1, 1],
  [1, -1, -1],

  [0, -2, 0],
  [-1, -2, 0],
  [-1, -2, -1],
  [1, -2, 1],
  [0, -2, 1],
  [1, -2, -1],

  [0, 0, 0],

  [0, 1, 0],
  [0, 2, 0],
  [-1, 0, -1],
  [-1, 0, 0],
  [1, 0, -1],
  [-1, 1, -1],
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 1],
];

const Isometric = () => {
  console.log(Wireframe.props);
  return (
    <Canvas color="none" zoom={20} autoRotate>
      <group position={[0, -1, 0]} rotation={[0, (45 * Math.PI) / 180, 0]}>
        {boxes.map((v) => (
          <Box
            material={() => <Basic color="#43A047" edgesColor="white" />}
            position={v}
          />
        ))}{" "}
      </group>
    </Canvas>
  );
};

export default Isometric;
