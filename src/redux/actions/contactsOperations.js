import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContactsApi,
  getContactsApi,
  postContactsApi,
} from '../../Api/mockApi';

export const addContacts = createAsyncThunk(
  'addContacts',
  async (dataFromForm, thunkApi) => {
    try {
      const contact = await postContactsApi(dataFromForm);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'getContacts',
  async (_, thunkApi) => {
    try {
      //   console.log('insideTry');
      const contactsFromApi = await getContactsApi();
      return contactsFromApi;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'removeContacts',
  async (id, thunkApi) => {
    try {
      await deleteContactsApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
