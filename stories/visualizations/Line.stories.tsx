import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LineChart from 'components/visualizations/Line';
import { ParentSize } from '@visx/responsive';

export default {
  title: 'Visualizations/Line',
  component: LineChart,
} as ComponentMeta<typeof LineChart>;

export const Primary: ComponentStory<typeof LineChart> = () => {
  return (
    <ParentSize className="my-5">
      {({ width, height }) => <LineChart width={width} height={height} />}
    </ParentSize>
  );
};

Primary.storyName = 'Stack';
Primary.args = {};
