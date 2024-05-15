import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';

const ContactList = ({ contacts }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <Contact key={id} id={id} name={name} number={number}></Contact>
            ))}
        </List>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
};

export default ContactList;
