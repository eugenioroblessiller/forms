import { useField } from 'formik';
import React from 'react';

import { CheckboxProps } from '../interfaces/interfaces';

export function MyCheckbox({ label, ...props }: CheckboxProps) {

    const [field, meta] = useField({ ...props, type: 'checkbox' })

    return (
        <>
            <label htmlFor={props.id || props.name}>
                <input type="checkbox" {...field} {...props} />
                {label}
            </label>
            {meta.touched && meta.error && (<span className='error'>{meta.error}</span>)}
        </>
    )
}

