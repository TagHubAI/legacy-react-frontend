import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ParseResult } from 'papaparse';

export interface TableState {
  value: number;
  imported: ParseResult<unknown> | null;
}

const initialState: TableState = {
  value: 0,
  imported: null,
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    importTable: (
      state: TableState,
      action: PayloadAction<ParseResult<unknown>>
    ) => {
      state.imported = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { importTable } = tableSlice.actions;

export default tableSlice.reducer;
