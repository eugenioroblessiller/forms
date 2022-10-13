import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { FormikAbstractation, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from '../pages';



export const Router = () => {
    return (
        <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/formik-basic' element={<FormikBasicPage />} />
            <Route path='/formik-yup' element={<FormikYupPage />} />
            <Route path='/formik-components' element={<FormikComponents />} />
            <Route path='/formik-abstractation' element={<FormikAbstractation />} />
        </Routes>
    )
}
