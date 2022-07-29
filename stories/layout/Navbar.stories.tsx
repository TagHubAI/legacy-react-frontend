// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideNav from '../../components/app/SideNav';

export default {
  title: 'Layout/Navbar',
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

export const Primary: ComponentStory<typeof SideNav> = () => <SideNav />;

Primary.parameters = { layout: 'fullscreen' };
