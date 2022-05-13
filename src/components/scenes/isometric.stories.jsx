import React from "react";

import Isometric from "./Isometric";

const Component = Isometric;

export default {
  title: `Scenes/${Component.name}`,
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.storyName = Component.name;
Default.args = Component.defaultProps;
