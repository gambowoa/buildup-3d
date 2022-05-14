import React from "react";
import * as THREE from "three";
import Basic from "../materials/Basic";
import PropTypes from "prop-types";
import { Edges, MeshDistortMaterial, Extrude, Center } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

const DCO = ({ material, ...restProps }) => {
  const lmao = useLoader(SVGLoader, "/dco_svg.svg").paths;

  const bruh = lmao.flatMap((path, i) => {
    return path.toShapes(true, true);
  });

  const ayo = useLoader(SVGLoader, "/dco_holes.svg").paths;

  const holes = ayo.flatMap((path, i) => {
    return path.toShapes(true, true);
  });

  bruh[0].holes.push(holes[0]);
  bruh[2].holes.push(holes[1]);

  const MaterialKind = material;

  const extrudeSettings = { steps: 1, depth: 10, bevelEnabled: false };
  return (
    <Center>
      {" "}
      <mesh scale={[0.01, -0.01, 0.01]}>
        <Extrude scale={1} args={[bruh, extrudeSettings]}>
          <MaterialKind />
        </Extrude>
      </mesh>
    </Center>
  );
};

DCO.defaultProps = { material: Basic };
DCO.propTypes = {
  material: PropTypes.symbol,
};

export default DCO;
