import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  args:{
    children:"Button"
  }
};

export const Primary = () => <Button varient="primary">Primary</Button>;
export const Secondary = () => <Button varient="secondary">Secondary</Button>;
export const Success = () => <Button varient="success">Success</Button>;
export const Danger = () => <Button varient="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  varient: "primary",
  // children: "Primary A",
};

export const PrimaryLong = Template.bind({});
PrimaryLong.args = {
  ...PrimaryA.args,
};
