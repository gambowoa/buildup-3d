import React from "react";
import { Edges } from "@react-three/drei";
import PropTypes from "prop-types";
const Basic = ({ color, edgesColor }) => {
  return (
    <>
      <meshBasicMaterial color={color} />
      <Edges color={edgesColor} scale={1} threshold={15} />
    </>
  );
};

Basic.defaultProps = { color: "lightblue", edgesColor: "black" };
Basic.propTypes = {
  color: PropTypes.string,
  edgesColor: PropTypes.string,
};

export default Basic;
