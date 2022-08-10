import Chip from 'components/core/Chip';
import Link from 'next/link';
import { IoEllipsisHorizontalCircleOutline } from 'react-icons/io5';
import { Workflow, WorkflowStatus } from 'types';

const StatusIndicator = ({ status }: { status: WorkflowStatus }) => {
  if (status === 'finished')
    return (
      <Chip variant="success" size="sm">
        Finished
      </Chip>
    );
  if (status === 'running')
    return (
      <Chip variant="progress" size="sm">
        Processing
      </Chip>
    );
  if (status === 'failed')
    return (
      <Chip variant="failure" size="sm">
        Failed
      </Chip>
    );

  return <Chip size="sm">Unknown</Chip>;
};

const WorkflowCard = ({ title, description, status }: Workflow & any) => {
  return (
    <Link href="#">
      <a
        className="flex flex-col bg-white h-48 rounded-md border p-4 transition-all 
        hover:shadow-lg focus-visible:shadow-lg active:shadow-none"
      >
        <div className="flex justify-between font-medium text">{title}</div>
        <p className="text-sm text-gray-500 my-2">{description}</p>
        <div className="flex-grow"></div>
        <div className="flex gap-2 items-center">
          <StatusIndicator status={status} />
          {/* <div className="text-sm text-gray-500">Created 2yrs ago</div> */}
          <div className="flex-grow"></div>
          <button>
            <IoEllipsisHorizontalCircleOutline size={24} />
          </button>
        </div>
      </a>
    </Link>
  );
};

export default WorkflowCard;
