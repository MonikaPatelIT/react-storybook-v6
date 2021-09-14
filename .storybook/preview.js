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

export const parameters = {
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
