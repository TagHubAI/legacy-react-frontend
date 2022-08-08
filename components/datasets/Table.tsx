import DataGrid, { Column } from 'react-data-grid';

interface TableProps {
  rows: readonly unknown[];
  columns: readonly Column<unknown, unknown>[];
}

const Table = ({ columns, rows }: TableProps) => {
  return <DataGrid columns={columns} rows={rows} className="h-full" />;
};

export default Table;
