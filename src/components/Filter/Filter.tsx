import { Label, Input } from './Filter.styled';
import { changeFilter } from 'store/filter/filterSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Filter = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');

    return (
        <>
            <Label>
                Find contacts by name
                <Input
                    name="text"
                    type="text"
                    value={filter}
                    onChange={e => {
                        setFilter(e.target.value);
                        dispatch(changeFilter(e.target.value));
                    }}
                />
            </Label>
        </>
    );
};

export default Filter;
