import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contactSlice';

export default configureStore({
    reducer: { contacts: contactReducer },
});
