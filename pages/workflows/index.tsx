import Layout from 'components/common/Layout';
import WorkflowGrid from 'components/workflows/WorkflowGrid';
import { NextPageWithLayout } from 'pages/_app';

const Workflows: NextPageWithLayout = () => {
  return (
    <>
      {/* <div className="absolute -z-10 inset-0 bg-gray-100 h-64 w-full" /> */}
      <div className="mx-2 sm:mx-0">
        <h1 className="text-3xl font-semibold">Workflows</h1>
        <p className="max-w-lg my-4 text-gray-500">
          Lorem ipsum to describe what a workflow is, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <WorkflowGrid />
    </>
  );
};

Workflows.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Workflows;
