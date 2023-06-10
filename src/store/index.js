import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './course.reducer';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});
