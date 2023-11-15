import { List } from './ContactList.styled';
import { Component } from 'react';
import Contact from 'components/Contact/Contact';

export default class ContactList extends Component {
    render() {
        const { contacts, onDeleteContact } = this.props;
        const listMarkup = contacts.map(({ id, name, number }) => {
            return (
                <Contact
                    key={id}
                    name={name}
                    number={number}
                    onDeleteContact={() => {
                        onDeleteContact(id);
                    }}
                ></Contact>
            );
        });

        return <List>{listMarkup}</List>;
    }
}
