import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const contacts = JSON.parse(localStorage.getItem('contacts'));

        if (contacts) {
            setContacts(contacts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleDeleteContact = contactId => {
        setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
    };

    const handleFilterContacts = e => {
        setFilter(e.target.value);
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
        );
    };

    const addContact = contact => {
        const isInContacts = contacts.find(({ name }) => contact.name === name);

        if (isInContacts) {
            alert(`${contact.name} is already in contacts`);
            return;
        }

        setContacts(contacts => [{ id: uuidv4(), ...contact }, ...contacts]);
    };

    const visibleContacts = getVisibleContacts();

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact} />

            <h2>Contacts</h2>
            <Filter value={filter} onFilterContacts={handleFilterContacts} />
            <ContactList
                contacts={visibleContacts}
                onDeleteContact={handleDeleteContact}
            />
        </>
    );
};

export default App;
