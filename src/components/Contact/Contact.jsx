import { Item, ContactInfo, DeleteBtn } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'store/contacts/contactsSlice';

const Contact = ({ id, name, phone }) => {
    const [deleteContact] = useDeleteContactMutation();

    return (
        <Item>
            <ContactInfo>
                {name}: {phone}
            </ContactInfo>
            <DeleteBtn
                type="button"
                onClick={() => {
                    deleteContact(id);
                }}
            >
                Delete
            </DeleteBtn>
        </Item>
    );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default Contact;
