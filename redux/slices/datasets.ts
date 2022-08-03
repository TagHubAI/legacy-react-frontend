import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Dataset {
  id: number;
  name: string;
  created_at: string;
  modified_at: string;
}

interface DatasetState {
  values: Dataset[];
  status: 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DatasetState = {
  values: [],
  status: 'loading',
  error: null,
};

export const fetchDatasets = createAsyncThunk(
  'datasets/getDatasets',
  async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + '/api/v1/datasets'
    ).then((response) => response.json());
    return response;
  }
);

export const datasetsSlice = createSlice({
  name: 'datasets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDatasets.fulfilled, (state, action) => {
      state.values = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default datasetsSlice.reducer;
