import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './actions/contactsReducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
