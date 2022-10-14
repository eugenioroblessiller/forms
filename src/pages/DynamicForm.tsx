import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value

    if (!input.validations) continue

    let schema = Yup.string()
    for (const rule of input.validations) {
        if (rule.type === "required") {
            schema = schema.required("Required")
        }
        if (rule.type === "email") {
            schema = schema.email("Check email format")
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 1, `Minimun of ${(rule as any).value} characters`)
        }
        // more rules...
    }
    requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(formik) => (
                    <Form noValidate>
                        {formJson.map(({ type, name, placeholder, label, options }) => {
                            if (['input', 'password', "email"].includes(type)) {
                                return <MyTextInput
                                    key={name}
                                    type={type as any}
                                    label={label}
                                    name={name}
                                    placeholder={placeholder} />
                            } else if (['select'].includes(type)) {
                                return <MySelect key={name} label={label} name={name}>
                                    <option value="">Select an option</option>
                                    {options?.map(({ id, label }) => (
                                        <option key={id} value={id}>{label}</option>
                                    ))}
                                </MySelect>
                            }
                            return <span>Type: {type} is not supported</span>
                        })}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
