import '../styles/styles.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Formik Register page</h1>

            <Formik
                initialValues={{ name: '', email: '', password1: '', password2: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Must be more than 2 characters')
                        .max(15, 'Must be less than 15 characters')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password1: Yup.string()
                        .max(12, 'Must be 12 characters or less')
                        .required('Required'),
                    password2: Yup.string()
                        .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                }}
            >
                {({ handleReset }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" component={'span'} />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component={'span'} />

                        <label htmlFor="password1">Password</label>
                        <Field name="password1" type="password" />
                        <ErrorMessage name="password1" component={'span'} />

                        <label htmlFor="password2">Confirm Password</label>
                        <Field name="password2" type="password" />
                        <ErrorMessage name="password2" component={'span'} />

                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
