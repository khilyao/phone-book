import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsAPI } from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        [contactsAPI.reducerPath]: contactsAPI.reducer,
    },

    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsAPI.middleware,
    ],
});

setupListeners(store.dispatch);
