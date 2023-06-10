import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: null,
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    updateCourse: (state, { payload }) => {
      state.courses = payload;
    },
  },
});

export const { updateCourse } = courseSlice.actions;

export default courseSlice.reducer;
