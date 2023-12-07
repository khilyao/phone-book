import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onFilterContacts }) => (
    <>
        <Label>
            Find contacts by name
            <Input
                name="text"
                type="text"
                value={value}
                onChange={onFilterContacts}
            />
        </Label>
    </>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilterContacts: PropTypes.func.isRequired,
};

export default Filter;
