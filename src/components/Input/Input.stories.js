import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const Large = () => <Input size="large" placeholder="Large size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Small = () => <Input size="small" placeholder="Small size" />;
