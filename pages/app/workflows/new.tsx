import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';

const NewWorkflowPage = () => {
  const [stage, setStage] = useState(0);
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setStage(stage + 1);
  };
  return (
    <div className="my-24 mx-16">
      {stage === 0 && (
        <>
          <h1 className="text-xl my-12">Create a workflow</h1>
          <form className="flex flex-col gap-8" onSubmit={handleFormSubmit}>
            <h2 className="text-3xl ">
              Let&apos;s choose a name for <br /> your workflow
            </h2>
            <input
              type="text"
              placeholder="Enter your workflow name"
              className="text-3xl"
            />

            <div className="flex gap-2 content-center items-center">
              <Checkbox.Root
                defaultChecked
                className="h-5 w-5 bg-gray-200"
                id="checkbox-terms"
              >
                <Checkbox.Indicator className="flex justify-center">
                  <IoCheckmarkOutline />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="checkbox-terms">
                Accept terms and conditions.
              </label>
            </div>

            <button className="bg-black text-white w-min px-14 py-4 rounded-sm">
              Continue
            </button>
          </form>
        </>
      )}

      {stage === 1 && (
        <>
          <h1 className="text-xl my-12">Upload a dataset</h1>
          <div className="bg-gray-100 border rounded-sm border-dashed border-gray-300 w-full h-48 flex justify-center items-center text-sm text-gray-500">
            Upload file (*.csv)
          </div>
          <button className=" my-8 bg-black text-white w-min px-14 py-4 rounded-sm">
            Continue
          </button>
        </>
      )}
    </div>
  );
};

export default NewWorkflowPage;
