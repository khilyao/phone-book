import { Item, ContactInfo, DeleteBtn } from './Contact.styled';
import PropTypes from 'prop-types';
// import { deleteContact } from 'store/contacts/contactsSlice';
// import { useDispatch } from 'react-redux';

const Contact = ({ id, name, phone }) => {
    // const dispatch = useDispatch();

    return (
        <Item>
            <ContactInfo>
                {name}: {phone}
            </ContactInfo>
            <DeleteBtn
                type="button"
                onClick={() => {
                    // dispatch(deleteContact({ id }));
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
