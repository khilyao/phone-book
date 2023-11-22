import { Item, ContactInfo, DeleteBtn } from './Contact.styled';
import PropTypes from 'prop-types';

const Contact = ({ name, number, onDeleteContact }) => (
    <Item>
        <ContactInfo>
            {name}: {number}
        </ContactInfo>
        <DeleteBtn type="button" onClick={onDeleteContact}>
            Delete
        </DeleteBtn>
    </Item>
);

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
