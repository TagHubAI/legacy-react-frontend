import React, { useEffect } from 'react';
import Layout from 'components/layouts/App';
import type { NextPageWithLayout } from 'pages/_app';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from 'redux/store';
import { fetchDatasets } from 'redux/slices/datasets';

import day from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  IoCreate,
  IoEllipsisVertical,
  IoText,
  IoTrashBin,
} from 'react-icons/io5';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
day.extend(relativeTime);

const DropdownMenuItem = ({ children }: { children: React.ReactNode }) => (
  <DropdownMenu.Item className="flex items-center gap-4 p-2 rounded focus-visible:outline-none ">
    {children}
  </DropdownMenu.Item>
);

const DatasetsPage: NextPageWithLayout = () => {
  const datasets = useSelector((state: RootState) => state.datasets.values);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDatasets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-50 h-full p-4">
      <h1 className="text-2xl mb-6">Datasets</h1>

      {datasets.map((dataset) => (
        <Link key={dataset.id} href={`/datasets/${dataset.id}`}>
          <a className="flex gap-4 p-4 border-b last-of-type:border-none items-center">
            <div className="grow">{dataset.name}</div>
            <div>{day(dataset.created_at).format('MMMM DD, YYYY')}</div>
            <div>{day(dataset.modified_at).format('MMMM DD, YYYY')}</div>
            <div>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <IoEllipsisVertical />
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    collisionPadding={16}
                    className="bg-white p-1 rounded-md border shadow-md w-48"
                  >
                    <DropdownMenu.Group>
                      <DropdownMenuItem>
                        <IoCreate size={22} />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <IoText size={22} />
                        Rename
                      </DropdownMenuItem>
                    </DropdownMenu.Group>
                    <DropdownMenu.Separator />
                    <DropdownMenuItem>
                      <IoTrashBin size={22} /> Delete
                    </DropdownMenuItem>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

DatasetsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DatasetsPage;
