import React from "react";

import Blocks from "./Blocks";

const Component = Blocks;

export default {
  title: `Scenes/${Component.name}`,
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.storyName = Component.name;
Default.args = Component.defaultProps;
