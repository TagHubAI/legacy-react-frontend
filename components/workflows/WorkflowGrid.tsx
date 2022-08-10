import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkflows } from 'redux/slices/workflows';
import { AppDispatch, RootState } from 'redux/store';
import WorkflowCard from './WorkflowCard';

const WorkflowGrid = () => {
  const workflows = useSelector((state: RootState) => state.workflows.values);
  const status = useSelector((state: RootState) => state.workflows.status);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchWorkflows());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'loading') return <div>Loading...</div>;

  if (status === 'succeeded' && workflows.length)
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
        {workflows.map((workflow) => (
          <WorkflowCard
            key={workflow.id}
            title={workflow.title}
            description={workflow.description}
            status={workflow.status}
          />
        ))}
      </div>
    );

  return <div>Null</div>;
};

export default WorkflowGrid;
