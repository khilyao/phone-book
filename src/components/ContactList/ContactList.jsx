import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
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
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
