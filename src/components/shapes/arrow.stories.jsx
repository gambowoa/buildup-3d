import React from "react";

import Arrow from "./Arrow";
import Canvas from "../canvas/Canvas";

const Component = Arrow;

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
