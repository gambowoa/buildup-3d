import React from "react";
import { Edges } from "@react-three/drei";
import PropTypes from "prop-types";
const Wireframe = ({ color, edgesColor }) => {
  return (
    <>
      <meshBasicMaterial color={color} wireframe />
    </>
  );
};

Wireframe.defaultProps = { color: "#ff0000", edgesColor: "#FFFFFF" };
Wireframe.propTypes = {
  color: PropTypes.string,
  edgesColor: PropTypes.string,
};

export default Wireframe;
