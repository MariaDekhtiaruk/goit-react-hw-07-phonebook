import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contactsThunks';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        // Set all contacts to the state contacts
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        // Add one contact to the state contacts
        state.contacts.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        // Rejected contact adding
        alert(action.payload);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        // Delete one contact by id from state
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
