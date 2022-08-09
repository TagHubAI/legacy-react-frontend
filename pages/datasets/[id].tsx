import Layout from 'components/common/Layout';
import { useRouter } from 'next/router';
import type { NextPageWithLayout } from 'pages/_app';
import { useEffect, useState } from 'react';
import DataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'content', name: 'Content' },
  { key: 'date', name: 'Date' },
];

const DatasetsPage: NextPageWithLayout = () => {
  const { id: datasetId } = useRouter().query;
  const [datapoints, setDatapoints] = useState([]);

  useEffect(() => {
    const fetchDatapoints = async (id: string) => {
      const response = await fetch(
        `http://localhost:4000/api/v1/datasets/${id}/datapoints`
      ).then((response) => response.json());
      setDatapoints(response);
    };
    fetchDatapoints(datasetId as string);
  }, [datasetId]);

  return (
    <div className="bg-gray-50 h-full flex flex-col">
      <h1 className="text-2xl p-4">Datasets {datasetId}</h1>
      <DataGrid
        columns={columns}
        rows={datapoints}
        defaultColumnOptions={{
          sortable: true,
          resizable: true,
        }}
        className="rdg-light h-full border-l-0"
      />
    </div>
  );
};

DatasetsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DatasetsPage;
