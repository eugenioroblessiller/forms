import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
    DynamicForm,
    FormikAbstractation,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterFormikPage,
    RegisterPage,
} from '../pages';



export const Router = () => {
    return (
        <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/formik-basic' element={<FormikBasicPage />} />
            <Route path='/formik-yup' element={<FormikYupPage />} />
            <Route path='/formik-components' element={<FormikComponents />} />
            <Route path='/formik-abstractation' element={<FormikAbstractation />} />
            <Route path='/formik-register' element={<RegisterFormikPage />} />
            <Route path='/dynamic-form' element={<DynamicForm />} />
        </Routes>
    )
}
