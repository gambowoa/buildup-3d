import React from "react";

import Canvas from "../canvas/Canvas";
import Octahedron from "./Octahedron";

const Component = Octahedron;

export default {
  title: `Shapes/${Component.name}`,
  component: Component,
  decorators: [
    (Story) => (
      <Canvas>
        <Story />
      </Canvas>
    ),
  ],
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.storyName = Component.name;
Default.args = Component.defaultProps;
