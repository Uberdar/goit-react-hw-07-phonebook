import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContacts,
  getContacts,
  removeContacts,
} from 'redux/actions/contactsOperations';
import { filterAction } from './contactsActions';

//   setDataBase(dataBase.filter(elem => elem.id !== DBid));
// [{ id: 1, name: 'ttt', number: 200000 }]
export const itemsReducer = createReducer([], {
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
});

export const filterReducer = createReducer('', {
  [filterAction]: (state, action) => {
    return (state = action.payload);
  },
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
