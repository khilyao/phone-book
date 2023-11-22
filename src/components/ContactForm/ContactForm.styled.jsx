import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
    display: inline-flex;
    flex-direction: column;

    max-width: 300px;
    padding: 10px;

    outline: 1px solid #000;
`;

export const SubmitBtn = styled.button`
    flex-shrink: 0;
    width: 100px;
`;
