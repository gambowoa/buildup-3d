import React from "react";
import Canvas from "../canvas/Canvas";
import Box from "../primitives/Box";
import Basic from "./Basic";

const Component = Basic;

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
Default.storyName = Component.name;
Default.args = Component.defaultProps;
