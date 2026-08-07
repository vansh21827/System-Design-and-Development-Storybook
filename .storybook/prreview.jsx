import { BrowserRouter } from "react-router-dom";
import "../styles/global.css";

/** @type {import('@storybook/react-vite').Preview} */
const preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],

  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    actions: {
      argTypesRegex: "^on[A-Z].*",
    },

    layout: "centered",

    a11y: {
      test: "todo",
    },
  },
};

export default preview;
