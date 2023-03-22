import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contactsThunks';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // addContact: (state, action) => {
    //   const { newContact } = action.payload;

    //   if (state.contacts.find(item => item.name === newContact.name)) {
    //     return alert(`${newContact.name} is already in contact`);
    //   }

    //   newContact.id = `id-${nanoid()}`;
    //   state.contacts.push(newContact);
    // },
    deleteContact: (state, action) => {
      const { contactId } = action.payload;

      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        // Set all contacts to the state contacts
        state.contacts = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        // Add one contact to the state contacts
        state.contacts.push(action.payload);
      })
      .addCase(addContactThunk.rejected, (_, action) => {
        // Rejected contact adding
        alert(action.payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        // Delete one contact by id from state
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      });
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
