import { StyledForm, SubmitBtn } from './ContactForm.styled';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Contact } from 'types/contact';
import {
    useAddContactMutation,
    useGetContactsQuery,
} from 'store/contacts/contactsSlice';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'"
        )
        .required(),
    phone: Yup.string()

        .trim()
        .matches(
            /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        )
        .required(),
});

const ContactForm = () => {
    const [addContact] = useAddContactMutation();
    const { data: contacts = [] } = useGetContactsQuery();

    const handleAddContact = async (contact: Contact) => {
        try {
            const isInContacts = contacts.find(
                ({ name }) => contact.name === name
            );

            if (!isInContacts) {
                await addContact(contact);
                return;
            }

            alert(`${contact.name} is already in contacts`);
        } catch (e) {
            console.log(e);
        }
    };

    const nameInputId = uuidv4();
    const numberInputId = uuidv4();

    return (
        <Formik
            initialValues={{ name: '', phone: '' }}
            validationSchema={validationSchema}
            onSubmit={(contact, { setSubmitting, resetForm }) => {
                const newContact = { ...contact, id: uuidv4() };

                handleAddContact(newContact);
                resetForm();
                setSubmitting(false);
            }}
        >
            <StyledForm>
                <label htmlFor={nameInputId}>Name</label>
                <Field name="name" id={nameInputId} type="text" />
                <ErrorMessage name="name" />
                <label htmlFor={numberInputId}>Number</label>
                <Field name="phone" id={numberInputId} type="number" />
                <ErrorMessage name="phone" />
                <SubmitBtn type="submit">Add contact</SubmitBtn>
            </StyledForm>
        </Formik>
    );
};

export default ContactForm;
