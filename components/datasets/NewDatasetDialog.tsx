import * as Dialog from '@radix-ui/react-dialog';
import { Button } from 'components/core/Button';
import { useCallback, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useDropzone } from 'react-dropzone';
import { parse } from 'papaparse';
import { useDispatch } from 'react-redux';
import { importTable } from 'redux/slices/table';
import { AppDispatch } from 'redux/store';

const NewDatasetDiaglog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      parse(file, {
        complete: (result) => {
          if (!result.errors.length) dispatch(importTable(result));
          console.log(JSON.stringify(result));
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
    },
    onDrop,
  });

  return (
    <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
      <Dialog.Trigger asChild>
        <Button size="md" className="">
          Create new dataset
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="absolute inset-0 bg-black-a9 animate-fade-in" />
        <Dialog.Content className="fixed inset-2/4 -translate-x-2/4 -translate-y-2/4 w-[32rem] h-min bg-white px-6 py-4 rounded border shadow-xl">
          <div className="flex items-center">
            <Dialog.Title className="font-semibold text-lg">
              Create dataset
            </Dialog.Title>
            <div className="grow"></div>
            <Dialog.Close className="absolute right-4" asChild>
              <Button size="square" variant="subtle" rounded>
                <IoCloseOutline size={26} className="icons stroke-[2.25rem]" />
              </Button>
            </Dialog.Close>
          </div>
          <div
            {...getRootProps()}
            className="flex flex-col items-center justify-center bg-gray-100 
            w-full h-48 p-4 my-4 border-dashed border border-gray-300 rounded"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <>
                <h2 className="font-medium">Select a CSV file to upload</h2>
                <p className="text-sm text-gray-500">
                  or drag and drop it here.
                </p>
              </>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NewDatasetDiaglog;
