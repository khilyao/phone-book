import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
export class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    componentDidMount() {
        const contacts = JSON.parse(localStorage.getItem('contacts'));

        if (contacts) {
            this.setState({ contacts });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts)
            );
        }
    }

    handleDeleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(({ id }) => id !== contactId),
        }));
    };

    handleFilterContacts = e => {
        this.setState({ filter: `${e.target.value}` });
    };

    getVisibleContacts = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
        );
    };

    addContact = (name, number) => {
        this.setState(prevState => {
            const contact = {
                id: uuidv4(),
                name,
                number,
            };

            return {
                ...prevState,
                contacts: [{ ...contact }, ...prevState.contacts],
            };
        });
    };

    render() {
        const visibleContacts = this.getVisibleContacts();

        return (
            <>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />

                <h2>Contacts</h2>
                <Filter
                    value={this.state.filter}
                    onFilterContacts={this.handleFilterContacts}
                />
                <ContactList
                    contacts={visibleContacts}
                    onDeleteContact={this.handleDeleteContact}
                />
            </>
        );
    }
}
