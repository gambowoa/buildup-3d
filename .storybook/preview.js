import GlobalStyles from "../src/styles/GlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  previewTabs: {
    "storybook/docs/panel": {
      hidden: false,
    },
  },
  docs: {
    source: {
      excludeDecorators: true,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <div style={{ height: "100vh" }}>
        <Story />
      </div>
    </>
  ),
];
