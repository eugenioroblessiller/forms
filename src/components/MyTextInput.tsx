import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';
import { TextInputProps } from '../interfaces/interfaces';

export function MyTextInput({ label, ...props }: TextInputProps) {

    const [field, meta] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            {meta.touched && meta.error && (<span className='error'>{meta.error}</span>)}
        </>
    )
}

