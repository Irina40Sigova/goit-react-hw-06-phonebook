import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: { ...contact, id: nanoid() },
        };
      },
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContact(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

const persistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

export const { addContact, deleteContact, filterContact } =
  phonebookSlice.actions;
