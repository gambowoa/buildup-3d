import React from "react";

import PropTypes from "prop-types";
import Basic from "../materials/Basic";
const Box = ({ depth, height, width, material }) => {
  return (
    <mesh scale={1}>
      <boxBufferGeometry args={[width, height, depth]} />
      {material}
    </mesh>
  );
};

Box.defaultProps = { depth: 1, height: 1, width: 1, material: <Basic /> };
Box.propTypes = {
  depth: PropTypes.number,
  height: PropTypes.number,
  material: PropTypes.symbol,
  width: PropTypes.number,
};
export default Box;
