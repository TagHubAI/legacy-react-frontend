import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Barstack from 'components/visualizations/Barstack';
import { ParentSize } from '@visx/responsive';

export default {
  title: 'Visualizations/Bar',
  component: Barstack,
} as ComponentMeta<typeof Barstack>;

export const Primary: ComponentStory<typeof Barstack> = () => {
  return (
    <ParentSize>
      {({ width, height }) => <Barstack width={width} height={height} />}
    </ParentSize>
  );
};

Primary.storyName = 'Stack';
Primary.args = {};
