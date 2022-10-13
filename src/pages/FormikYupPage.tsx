import { useFormik } from 'formik'
import React from 'react'

import * as Yup from 'yup';

export const FormikYupPage = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validationSchema: ({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            console.log('valores de formulario', values)
        }
    })

    return (
        <div>
            <h1>Formik YOP</h1>

            <form action="" noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="">First name</label>
                <input type="text" id="firstName" {...formik.getFieldProps('firstName')} />
                {formik.touched.firstName && formik.errors.firstName && <span>{formik.errors.firstName}</span>}

                <label htmlFor="">Last name</label>
                <input type="text" id="lastName" {...formik.getFieldProps('lastName')} />
                {formik.touched.lastName && formik.errors.lastName && <span>{formik.errors.lastName}</span>}

                <label htmlFor="">Email address</label>
                <input type="email" id="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
