import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6644c641b8925626f88fe500.mockapi.io',
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: contact => ({
                url: '/contacts',
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const { useGetContactsQuery, useAddContactMutation } = contactsAPI;

// const initialState = {
//     contacts: JSON.parse(localStorage.getItem('contacts')),
// };

// const contactSlice = createSlice({
//     name: 'contacts',
//     initialState,
//     reducers: {
//         addContact: (state, action) => {
//             const isInContacts = state.contacts.find(
//                 ({ name }) => action.payload.name === name
//             );

//             if (isInContacts) {
//                 alert(`${action.payload.name} is already in contacts`);
//                 return;
//             }

//             state.contacts.push(action.payload);
//         },
//         deleteContact: (state, action) => {
//             state.contacts = state.contacts.filter(
//                 ({ id }) => id !== action.payload.id
//             );
//         },
//     },
// });

// export const { addContact, deleteContact } = contactSlice.actions;
// export const contactsSelector = state => state.contacts.contacts;

// export default contactSlice.reducer;
