import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withConsole } from "@storybook/addon-console";
import { addDecorator } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import Center from "../src/components/Center/Center";

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Center>
        <Story />
      </Center>
    </ChakraProvider>
  ),
];

const customViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px",
    },
  },
};

addDecorator((story, context) => withConsole()(story)(context));
export const parameters = {
  viewport: { viewports: { ...MINIMAL_VIEWPORTS, ...customViewports } },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    options: {
      storySort: (a, b) =>
        a[1].kind === b[1].kind
          ? 0
          : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
  },
};
