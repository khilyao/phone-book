import { Item, ContactInfo, DeleteBtn } from './Contact.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'store/contacts/contactSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <Item>
            <ContactInfo>
                {name}: {number}
            </ContactInfo>
            <DeleteBtn
                type="button"
                onClick={() => {
                    dispatch(deleteContact({ id }));
                }}
            >
                Delete
            </DeleteBtn>
        </Item>
    );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default Contact;
