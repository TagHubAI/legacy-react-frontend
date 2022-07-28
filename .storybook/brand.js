import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://taghub.dev',
  brandImage:
    'https://raw.githubusercontent.com/TagHubAI/taghub-landing/main/assets/images/logo.svg',
  brandTarget: '_self',

  fontBase: '"IBM Plex Sans", sans-serif',
});
