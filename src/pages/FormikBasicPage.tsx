import '../styles/styles.css';

import { FormikErrors, useFormik } from 'formik';
import React from 'react';

import { FormValues } from '../interfaces/interfaces';


export const FormikBasicPage = () => {

    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {}

        if (!values.firstName) {
            errors.firstName = 'First name required'
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 caraters or less'
        }

        if (!values.lastName) {
            errors.lastName = 'Last name required'
        } else if (values.lastName.length > 15) {
            errors.firstName = 'Must be 15 caraters or less'
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validate,
        onSubmit: values => {
            console.log('valores de formulario', values)
        }
    })


    return (
        <div>
            <h1>Formik basic</h1>

            <form action="" noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="">First name</label>
                <input type="text" name="firstName" id=""
                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
                {formik.touched.firstName && formik.errors.firstName && <span>{formik.errors.firstName}</span>}

                <label htmlFor="">Last name</label>
                <input type="text" name="lastName" id=""
                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                {formik.touched.lastName && formik.errors.lastName && <span>{formik.errors.lastName}</span>}

                <label htmlFor="">Email address</label>
                <input type="email" name="email" id=""
                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
