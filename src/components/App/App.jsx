import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';

export class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
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
        return (
            <>
                <ContactForm onSubmit={this.addContact} />
            </>
        );
    }
}
