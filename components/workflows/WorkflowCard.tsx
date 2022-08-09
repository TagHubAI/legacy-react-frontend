import Chip from 'components/core/Chip';
import Link from 'next/link';
import { IoEllipsisHorizontalCircleOutline } from 'react-icons/io5';

const WorkflowCard = () => {
  return (
    <Link href="#">
      <a
        className="flex flex-col bg-white h-56 rounded border p-4 transition-all 
        hover:shadow-lg focus-visible:shadow-lg active:shadow-none"
      >
        <div className="flex justify-between font-medium text">
          Financial Tweets
        </div>
        <p className="text-sm text-gray-500 my-2">
          Tweets from verified users concerning stocks traded on the NYSE,
          NASDAQ, & SNP
        </p>
        <div className="flex-grow"></div>
        <div className="flex justify-between">
          <Chip variant="success" size="sm">
            Processing
          </Chip>
          <button>
            <IoEllipsisHorizontalCircleOutline size={24} />
          </button>
        </div>
      </a>
    </Link>
  );
};

export default WorkflowCard;
