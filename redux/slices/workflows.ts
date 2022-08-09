import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Workflow {
  id: number;
  name: string;
  created_at: string;
  modified_at: string;
}

interface WorkflowState {
  values: Workflow[];
  status: 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WorkflowState = {
  values: [],
  status: 'loading',
  error: null,
};

export const fetchWorkflows = createAsyncThunk(
  'workflows/getWorkflows',
  async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + '/api/v1/workflows'
    ).then((response) => response.json());
    return response;
  }
);

export const workflowsSlice = createSlice({
  name: 'workflows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWorkflows.fulfilled, (state, action) => {
      state.values = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default workflowsSlice.reducer;
