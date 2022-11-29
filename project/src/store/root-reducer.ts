import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { appData } from './app-data/app-data';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.Process]: appProcess.reducer,
});
