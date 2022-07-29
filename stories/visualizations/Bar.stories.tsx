import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BarChart from 'components/visualizations/Bar';
import { ParentSize } from '@visx/responsive';

export default {
  title: 'Visualizations/Bar',
  component: BarChart,
} as ComponentMeta<typeof BarChart>;

export const Default: ComponentStory<typeof BarChart> = ({ data }) => {
  return (
    <ParentSize>
      {({ width, height }) => (
        <BarChart width={width} height={height} data={data} />
      )}
    </ParentSize>
  );
};

Default.storyName = 'Simple';
Default.args = {
  data: [
    {
      name: 'Lion',
      color: '#22C55E',
      value: 1,
    },
    {
      name: 'Tiger',
      color: '#84CC16',
      value: 5,
    },
    {
      name: 'Leopard',
      color: '#EAB308',
      value: 3,
    },
    {
      name: 'Ocelot',
      color: '#F59E0B',
      value: 3,
    },
    {
      name: 'Girlfriend',
      color: '#F97316',
      value: 10,
    },
  ],
};
