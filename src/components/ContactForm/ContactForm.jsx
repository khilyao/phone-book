import { Component } from 'react';
import { Wrapper, Label, Input, Form, SubmitBtn } from './ContactForm.styled';
import { v4 as uuidv4 } from 'uuid';

export default class ContactForm extends Component {
    nameInputId = uuidv4();
    numberInputId = uuidv4();

    state = {
        name: '',
        number: '',
    };

    handleInputChange = e => {
        const target = e.currentTarget;
        const key = target.name;

        this.setState({
            [key]: target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { name, number } = this.state;
        this.props.onSubmit(name, number);

        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Wrapper>
                    <Label htmlFor={this.nameInputId}>Name</Label>
                    <Input
                        name="name"
                        id={this.nameInputId}
                        type="text"
                        value={name}
                        onChange={this.handleInputChange}
                        required
                    />
                </Wrapper>
                <Wrapper>
                    <Label htmlFor={this.numberInputId}>Number</Label>{' '}
                    <Input
                        name="number"
                        id={this.numberInputId}
                        type="tel"
                        value={number}
                        onChange={this.handleInputChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Wrapper>
                <SubmitBtn type="submit">Add contact</SubmitBtn>
            </Form>
        );
    }
}
