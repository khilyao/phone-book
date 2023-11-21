import { Component } from 'react';
import { StyledForm, SubmitBtn } from './ContactForm.styled';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    number: Yup.string().required(),
});

export default class ContactForm extends Component {
    nameInputId = uuidv4();
    numberInputId = uuidv4();

    render() {
        return (
            <Formik
                initialValues={{ name: '', number: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    const { name, number } = values;

                    this.props.onSubmit(name, number);
                    resetForm();
                    setSubmitting(false);
                }}
            >
                <StyledForm>
                    <label htmlFor={this.nameInputId}>Name</label>
                    <Field name="name" id={this.nameInputId} type="text" />
                    <label htmlFor={this.numberInputId}>Number</label>
                    <Field
                        name="number"
                        id={this.numberInputId}
                        type="tel"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    />
                    <SubmitBtn type="submit">Add contact</SubmitBtn>
                </StyledForm>
            </Formik>
        );
    }
}
