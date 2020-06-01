import React from 'react';
import {useFormikContext} from "formik";

const SubmitButton = ({ text, loading }) => {
    const { handleSubmit } = useFormikContext()
    return (
        <div className="button-container">
        <button onClick={handleSubmit} className="green" type="button" disabled={loading}>
            {!loading ? text : '...' }
        </button>
        </div>
    );
};

export default SubmitButton;
