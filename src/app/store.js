import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import AuthReducer from '../auth/authSlice';
import propertiesReducer from '../dashboard/Property/propertiesSlice';
import targetsReducer from '../dashboard/Target/targetsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: AuthReducer,
    properties: propertiesReducer,
    targets: targetsReducer,
  },
});
