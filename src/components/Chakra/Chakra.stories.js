import { Button } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: { onClick: { action: console.log("m clicked") } },
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click .btn"],
  //   },
  // },
};

const Template = (args) => <Button {...args} />;
export const Success = Template.bind({});
Success.args = {
  colorScheme: "green",
  children: "Success",
};
// export const Success = () => <Button colorScheme="green">Success</Button>;
export const Danger = () => (
  <Button colorScheme="red" onClick={console.log("Danger")}>
    Danger
  </Button>
);

export const Knobs = () => (
  <Button disabled={boolean("Disabled", false)}>
    {text("Label", "Button Label")}
  </Button>
);
