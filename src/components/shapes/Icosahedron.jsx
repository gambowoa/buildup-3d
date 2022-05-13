import React from "react";

import PropTypes from "prop-types";
import Basic from "../materials/Basic";
const Icosahedron = ({ detail, radius, material, ...restProps }) => {
  const MaterialKind = material;
  return (
    <mesh scale={1} {...restProps}>
      <icosahedronBufferGeometry args={[radius, detail]} />
      <MaterialKind />
    </mesh>
  );
};
Icosahedron.defaultProps = { detail: 0, radius: 1, material: Basic };
Icosahedron.propTypes = {
  detail: PropTypes.number,
  radius: PropTypes.number,
  material: PropTypes.symbol,
};
export default Icosahedron;
