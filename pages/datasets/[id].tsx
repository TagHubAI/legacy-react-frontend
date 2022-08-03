import Layout from 'components/layouts/App';
import { useRouter } from 'next/router';
import type { NextPageWithLayout } from 'pages/_app';

const DatasetsPage: NextPageWithLayout = () => {
  const { id: datasetId } = useRouter().query;

  return (
    <div className="bg-gray-50 h-full p-4">
      <h1 className="text-2xl mb-6">Datasets {datasetId}</h1>
    </div>
  );
};

DatasetsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DatasetsPage;
