import '../assets/styles/globals.css';
import TabHubTheme from './brand';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: TabHubTheme,
  },
};
