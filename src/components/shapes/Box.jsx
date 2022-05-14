import React, { useEffect } from "react";

import PropTypes from "prop-types";
import Basic from "../materials/Basic";
const Box = ({ depth, height, width, material, ...restProps }) => {
  useEffect(() => {
    console.log("something changed!");
  }, []);

  const MaterialKind = material;

  return (
    <mesh scale={1} {...restProps}>
      <boxBufferGeometry args={[width, height, depth]} />
      <MaterialKind />
    </mesh>
  );
};

Box.defaultProps = { depth: 1, height: 1, width: 1, material: Basic };
Box.propTypes = {
  depth: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
};
export default Box;
