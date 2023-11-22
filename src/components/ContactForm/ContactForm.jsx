import { Component } from 'react';
import { StyledForm, SubmitBtn } from './ContactForm.styled';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'"
        )
        .required(),
    number: Yup.string()
        .trim()
        .matches(
            /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        )
        .required(),
});

export default class ContactForm extends Component {
    nameInputId = uuidv4();
    numberInputId = uuidv4();

    render() {
        return (
            <Formik
                initialValues={{ name: '', number: '' }}
                validationSchema={validationSchema}
                onSubmit={(contact, { setSubmitting, resetForm }) => {
                    this.props.onSubmit(contact);
                    resetForm();
                    setSubmitting(false);
                }}
            >
                <StyledForm>
                    <label htmlFor={this.nameInputId}>Name</label>
                    <Field name="name" id={this.nameInputId} type="text" />
                    <ErrorMessage name="name" />
                    <label htmlFor={this.numberInputId}>Number</label>
                    <Field name="number" id={this.numberInputId} type="tel" />
                    <ErrorMessage name="number" />
                    <SubmitBtn type="submit">Add contact</SubmitBtn>
                </StyledForm>
            </Formik>
        );
    }
}
