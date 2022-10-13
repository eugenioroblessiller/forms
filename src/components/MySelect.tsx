import { ErrorMessage, useField } from 'formik';
import React from 'react';

import { SelectProps } from '../interfaces/interfaces';

export const MySelect = ({ label, ...props }: SelectProps) => {
    const [field, meta] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component={'span'} />
            {/* {meta.touched && meta.error && (<span className='error'>{meta.error}</span>)} */}
        </>
    )
}
