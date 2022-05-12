import React from "react";
import * as THREE from "three";
import Basic from "../materials/Basic";
import PropTypes from "prop-types";
import { Edges, MeshDistortMaterial, Extrude, Center } from "@react-three/drei";

const Arrow = ({ material }) => {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(-10.7748 / 100, -0.166504 / 100);
    _shape.lineTo(-10.7748 / 100, -23.7368 / 100);
    _shape.lineTo(-60.3992 / 100, -23.7368 / 100);
    _shape.lineTo(-0.63623 / 100, -83.5001 / 100);
    _shape.lineTo(-17.3027 / 100, -100.167 / 100);
    _shape.lineTo(-77.066 / 100, -40.4032 / 100);
    _shape.lineTo(-77.066 / 100, -90.0279 / 100);
    _shape.lineTo(-100.636 / 100, -90.0279 / 100);
    _shape.lineTo(-100.636 / 100, -23.7368 / 100);
    _shape.lineTo(-100.636 / 100, -0.166504 / 100);
    _shape.lineTo(-10.7748 / 100, -0.166504 / 100);

    return [_shape];
  }, []);

  const MaterialKind = material;

  const extrudeSettings = { steps: 1, depth: 0.2, bevelEnabled: false };
  return (
    <Center>
      {" "}
      <mesh scale={1}>
        <Extrude scale={1} args={[shape, extrudeSettings]}>
          <MaterialKind />
        </Extrude>
      </mesh>
    </Center>
  );
};

Arrow.defaultProps = { material: Basic };
Arrow.propTypes = {
  material: PropTypes.symbol,
};

export default Arrow;
