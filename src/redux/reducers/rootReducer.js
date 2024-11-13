"use client"
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import testReducer from './testReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  test: testReducer,
});

export default rootReducer;
