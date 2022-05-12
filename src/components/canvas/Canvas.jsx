import React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  Center,
  Bounds,
} from "@react-three/drei";
import Box from "../primitives/Box";

const Canvas = ({ children, color = "black" }) => {
  return (
    <ThreeCanvas
      flat
      linear
      orthographic
      dpr={[1, 2]}
      camera={{ position: [0, 0.57734471598, 0.81650050761], zoom: 200 }}
    >
      <Bounds fit clip observe margin={1.25} damping={0}>
        {children}
      </Bounds>

      <OrbitControls
        autoRotate
        enableRotate={true}
        enablePan={false}
        enableZoom={true}
      />
      <color attach="background" args={[color]} />
    </ThreeCanvas>
  );
};

export default Canvas;
