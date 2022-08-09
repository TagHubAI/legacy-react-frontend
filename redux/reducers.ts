import { combineReducers } from 'redux';
import datasets from './slices/datasets';
import table from './slices/table';
import workflows from './slices/workflows';

const reducers = combineReducers({ datasets, table, workflows });

export default reducers;
