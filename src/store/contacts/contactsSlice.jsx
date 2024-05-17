import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const END_POINT = '/contacts';

export const contactsAPI = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6644c641b8925626f88fe500.mockapi.io',
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => END_POINT,
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: contact => ({
                url: END_POINT,
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `${END_POINT}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
} = contactsAPI;
