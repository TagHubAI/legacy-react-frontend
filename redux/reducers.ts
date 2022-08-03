import { combineReducers } from 'redux';
import datasets from './slices/datasets';

const reducers = combineReducers({ datasets });

export default reducers;
