import { Component } from 'react';
import { Item, ContactInfo, DeleteBtn } from './Contact.styled';

export default class Contact extends Component {
    render() {
        const { name, number, onDeleteContact } = this.props;

        return (
            <Item>
                <ContactInfo>
                    {name}: {number}
                </ContactInfo>
                <DeleteBtn type="button" onClick={onDeleteContact}>
                    Delete
                </DeleteBtn>
            </Item>
        );
    }
}
