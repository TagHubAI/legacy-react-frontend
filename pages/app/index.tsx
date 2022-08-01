import { useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Layout from 'components/layouts/App';
import type { NextPageWithLayout } from 'pages/_app';
import NewWorkflowPage from './workflows/new';

const AppHomePage: NextPageWithLayout = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <main ref={ref} className="bg-gray-50 px-4 py-3 w-full relative">
      <form action="">
        <input
          type="text"
          placeholder="Search for workflows and models..."
          className="border border-gray-200 h-10 text-sm p-2 min-w-full"
        />
      </form>
      <div className="my-7">
        <h1 className="text-2xl my-4">Recent workflows</h1>

        <div className="grid grid-cols-3 gap-4">
          <a
            className="bg-white flex justify-center items-center aspect-4/3 
            border border-gray-200 border-1 rounded-sm"
            onClick={() => setOpen(true)}
          >
            Add a workflow
          </a>
        </div>
      </div>

      <Dialog.Root open={open} modal={false}>
        <Dialog.Portal container={ref.current}>
          <Dialog.Overlay />
          <Dialog.Content className="absolute top-0 right-0 h-full w-full bg-white">
            <NewWorkflowPage />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
};

AppHomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AppHomePage;
