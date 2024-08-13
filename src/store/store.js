import { configureStore } from '@reduxjs/toolkit';
import widgetSlice from './slice/widgetSlice';

const store = configureStore({
  reducer: {
    widget: widgetSlice,
  },
});

export default store;
