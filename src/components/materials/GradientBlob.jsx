import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { LayerMaterial, Fresnel, Noise } from "lamina";

const GradientBlob = ({
  colorA,
  colorB,
  colorC,
  colorD,
  edgesColor,
  scale,
  speed,
}) => {
  const ref = useRef();

  useFrame((state) => {
    const tick = state.clock.elapsedTime * speed;
    ref.current.layers[0].offset.set(
      (tick * 1) / scale,
      (tick * 1) / scale,
      (tick * 1) / scale
    );
  });

  return (
    <>
      <LayerMaterial ref={ref} toneMapped={false}>
        <Noise
          type="simplex"
          scale={scale}
          colorA={colorA}
          colorB={colorB}
          colorC={colorC}
          colorD={colorD}
          offset={[0, 0, 0]}
        />
        <Fresnel
          mode="softlight"
          color="white"
          intensity={1}
          power={1}
          bias={1}
        />
      </LayerMaterial>
      <Edges color={edgesColor} scale={1} threshold={1} />
    </>
  );
};

GradientBlob.defaultProps = {
  colorA: "#ffffff",
  colorB: "#c1ffeb",
  colorC: "#ffcafd",
  colorD: "#f1ffcc",
  edgesColor: "#FFFFFF",
  scale: 0.25,
  speed: 0.5,
};
GradientBlob.propTypes = {
  colorA: PropTypes.string,
  colorB: PropTypes.string,
  colorC: PropTypes.string,
  colorD: PropTypes.string,
  edgesColor: PropTypes.string,
  scale: PropTypes.number,
  speed: PropTypes.number,
};

export default GradientBlob;
