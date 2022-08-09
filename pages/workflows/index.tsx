import Layout from 'components/common/Layout';
import WorkflowCard from 'components/workflows/WorkflowCard';
import { NextPageWithLayout } from 'pages/_app';

const Workflows: NextPageWithLayout = () => {
  return (
    <>
      {/* <div className="absolute -z-10 inset-0 bg-gray-100 h-64 w-full" /> */}
      <h1 className="text-3xl font-semibold">Workflows</h1>
      <p className="max-w-lg my-4 text-gray-600">
        Lorem ipsum to describe what a workflow is, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
        <WorkflowCard />
        <WorkflowCard />
        <WorkflowCard />
        <WorkflowCard />
        <WorkflowCard />
        <WorkflowCard />
      </div>
    </>
  );
};

Workflows.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Workflows;
