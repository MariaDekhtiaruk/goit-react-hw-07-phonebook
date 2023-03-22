import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'services/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await api.fetchAll();
    return response;
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { getState, rejectWithValue }) => {
    const state = getState();

    if (state.contacts.find(item => item.name === contact.name)) {
      return rejectWithValue(`${contact.name} is already in contact`);
    }

    const response = await api.add(contact);
    return response;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await api.delete(id);
    return response;
  }
);
