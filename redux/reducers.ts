import { combineReducers } from 'redux';
import datasets from './slices/datasets';
import table from './slices/table';

const reducers = combineReducers({ datasets, table });

export default reducers;
