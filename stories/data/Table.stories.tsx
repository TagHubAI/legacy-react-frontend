import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { columns, rows } from './data.example';

import Table from 'components/datasets/Table';

export default {
  title: 'Data/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

export const Default: ComponentStory<typeof Table> = ({ columns, rows }) => {
  return <Table columns={columns} rows={rows} />;
};

Default.args = {
  columns,
  rows,
};
