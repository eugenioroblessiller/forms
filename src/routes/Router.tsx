import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../pages/RegisterPage'

export const Router = () => {
    return (
        <Routes>
            <Route path='/register' element={<RegisterPage />} />
        </Routes>
    )
}
