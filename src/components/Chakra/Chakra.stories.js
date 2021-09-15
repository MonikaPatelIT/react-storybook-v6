import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Success = Template.bind({});
Success.args = {
  colorScheme: "green",
  children: "Success",
};
// export const Success = () => <Button colorScheme="green">Success</Button>;
// export const Danger = () => <Button colorScheme="red">Danger</Button>;
