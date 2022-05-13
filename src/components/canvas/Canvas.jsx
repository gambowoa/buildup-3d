import React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  Center,
  Bounds,
} from "@react-three/drei";
import Box from "../shapes/Box";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Canvas = ({
  children,
  color = "black",
  position = [0, 0.57734471598, 0.81650050761],
  autoRotate = true,
  zoom = 40,
}) => {
  const { height, width, dpr } = useWindowDimensions();
  console.log(width);
  return (
    <ThreeCanvas flat linear dpr={dpr}>
      <OrthographicCamera
        makeDefault
        position={position}
        zoom={(width * zoom) / 100}
        far={1000}
        near={-1000}
      />
      {children}

      <OrbitControls
        autoRotate={autoRotate}
        enableRotate={true}
        enablePan={true}
        enableZoom={true}
      />
      <color attach="background" args={[color]} />
    </ThreeCanvas>
  );
};

export default Canvas;
