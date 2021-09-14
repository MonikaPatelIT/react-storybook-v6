import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const Large = () => <Input size="large" placeHolder="Large size" />;
export const Medium = () => <Input size="medium" placeHolder="Medium size" />;
export const Small = () => <Input size="small" placeHolder="Small size" />;
