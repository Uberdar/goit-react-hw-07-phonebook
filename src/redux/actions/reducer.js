import { createReducer } from '@reduxjs/toolkit';
import {
  addContacts,
  getContacts,
  removeContacts,
} from 'components/Operations/operations';
import { deleteidAction, addAction } from './action';

//   setDataBase(dataBase.filter(elem => elem.id !== DBid));
// [{ id: 1, name: 'ttt', number: 200000 }]
export const itemsReducer = createReducer(
  () => {
    let getLocalStorage = localStorage.getItem('localDB');
    let parceLocalStorage = JSON.parse(getLocalStorage);
    return parceLocalStorage ?? [];
  },
  {
    [deleteidAction]: (state, action) => {
      const newContacts = state.filter(elem => elem.id !== action.payload);
      localStorage.setItem('localDB', JSON.stringify(newContacts));
      return newContacts;
    },
    [addAction]: (state, action) => {
      const contacts = [...state, action.payload];
      localStorage.setItem('localDB', JSON.stringify(contacts));
      return contacts;
    },
    [getContacts.fulfilled]: (_, action) => {
      // console.log("payload :>> ", payload);
      return action.payload;
    },
    [addContacts.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
    [removeContacts.fulfilled]: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
  }
);
