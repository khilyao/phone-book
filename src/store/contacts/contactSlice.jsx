import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: JSON.parse(localStorage.getItem('contacts')),
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            const isInContacts = state.contacts.find(
                ({ name }) => action.payload.name === name
            );

            if (isInContacts) {
                alert(`${action.payload.name} is already in contacts`);
                return;
            }

            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(
                ({ id }) => id !== action.payload.id
            );
        },
    },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsSelector = state => state.contacts.contacts;

export default contactSlice.reducer;
