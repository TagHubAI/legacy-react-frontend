export type WorkflowStatus = 'running' | 'finished' | 'failed' | 'unknown';

export type Workflow = {
  id: string;
  title: string;
  description?: string;
  status: WorkflowStatus;
  created_at: string;
  modified_at: string;
  last_opened: string;
};

export type Dataset = {
  id: number;
  name: string;
  created_at: string;
  modified_at: string;
};
