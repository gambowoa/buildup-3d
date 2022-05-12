import React from "react";
import Canvas from "../canvas/Canvas";
import Box from "../primitives/Box";
import GradientBlob from "./GradientBlob";

const Component = GradientBlob;

export default {
  title: `Materials/${Component.name}`,
  component: Component,
  decorators: [
    (Story) => (
      <Canvas>
        <Box material={Story} />
      </Canvas>
    ),
  ],
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.storyName = "Iridescent";
Default.args = Component.defaultProps;

export const BlackAndWhite = Template.bind({});
BlackAndWhite.storyName = "Black and White";
BlackAndWhite.args = {
  colorA: "#000000",
  colorB: "#000000",
  colorC: "#ffffff",
  colorD: "#ffffff",
  scale: 1.2,
  speed: 0.5,
  edgesColor: "#000000",
};
