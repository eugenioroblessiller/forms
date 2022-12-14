import '../styles/styles.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address').required('Required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Must accept terms and conditions'),
                    jobType: Yup.string()
                        .notOneOf(['product'], 'This option is not allowed')
                        .required('Required')

                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                }}>
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" component='span' />

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" component='span' />

                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component='span' />

                    <label htmlFor="jobType">Job type</label>
                    <Field name="jobType" as="select" >
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </Field>
                    <ErrorMessage name="jobType" component='span' />

                    <label htmlFor="terms">
                        <Field name="terms" type="checkbox" />
                        Terms and conditions
                    </label>
                    <ErrorMessage name="terms" component='span' />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

        </div>
    )
}
