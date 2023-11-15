import { Label, Input } from './Filter.styled';
import { Component } from 'react';

export default class Filter extends Component {
    render() {
        const { value, onFilterContacts } = this.props;

        return (
            <Label>
                Find contacts by name
                <Input type="text" value={value} onChange={onFilterContacts} />
            </Label>
        );
    }
}
