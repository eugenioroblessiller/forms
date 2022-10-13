import '../styles/styles.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { MySelect } from '../components/MySelect';
import { MyTextInput } from './../components/MyTextInput';
import { MyCheckbox } from '../components/MyChecbox';

export const FormikAbstractation = () => {
    return (
        <div>
            <h1>Formik Abstractation</h1>

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
                    <MyTextInput label={'First Name'} name={'firstName'} placeholder={'Pancho'} type={'text'} />
                    <MyTextInput label={'Last Name'} name={'lastName'} placeholder={'Villa'} type={'text'} />
                    <MyTextInput label={'Email Address'} name={'email'} placeholder={'example@email.com'} type={'email'} />

                    <MySelect label={'Job Title type'} name={'jobType'} >
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </MySelect>

                    <MyCheckbox label={'Terms'} name={'terms'} />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

        </div>
    )
}

function undefined({ }) {
    return (<> <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" component='span' /></>);
}
