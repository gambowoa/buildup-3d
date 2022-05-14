import React from "react";

import DCO from "./DCO";
import Canvas from "../canvas/Canvas";

const Component = DCO;

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
