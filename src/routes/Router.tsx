import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { FormikBasicPage } from '../pages/FormikBasicPage';
import { FormikComponents } from '../pages/FormikComponents';
import { FormikYupPage } from '../pages/FormikYupPage';
import { RegisterPage } from '../pages/RegisterPage';

export const Router = () => {
    return (
        <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/formik-basic' element={<FormikBasicPage />} />
            <Route path='/formik-yup' element={<FormikYupPage />} />
            <Route path='/formik-components' element={<FormikComponents />} />
        </Routes>
    )
}
