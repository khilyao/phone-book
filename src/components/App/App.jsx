import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { contactsSelector } from '../../store/contacts/contactSlice';

const App = () => {
    const contacts = useSelector(contactsSelector);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleFilterContacts = e => {
        setFilter(e.target.value);
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
        );
    };

    const visibleContacts = getVisibleContacts();

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter value={filter} onFilterContacts={handleFilterContacts} />
            <ContactList contacts={visibleContacts} />
        </>
    );
};

export default App;
