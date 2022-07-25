import Layout from 'components/app/Layout';
import type { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';

const AppPage: NextPageWithLayout = () => {
  return <h1 className="text-3xl ">This is TagHub App!</h1>;
};

AppPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AppPage;
