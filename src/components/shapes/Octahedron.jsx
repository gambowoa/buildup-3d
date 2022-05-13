import React from "react";

import PropTypes from "prop-types";
import Basic from "../materials/Basic";
const Octahedron = ({ detail, radius, material }) => {
  const MaterialKind = material;

  return (
    <mesh scale={1}>
      <octahedronBufferGeometry args={[radius, detail]} />
      <MaterialKind />
    </mesh>
  );
};
Octahedron.defaultProps = { detail: 0, radius: 1, material: Basic };
Octahedron.propTypes = {
  detail: PropTypes.number,
  radius: PropTypes.number,
  material: PropTypes.symbol,
};
export default Octahedron;
