import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { FormikBasicPage } from '../pages/FormikBasicPage';
import { RegisterPage } from '../pages/RegisterPage';

export const Router = () => {
    return (
        <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/formik-basic' element={<FormikBasicPage />} />
        </Routes>
    )
}
