import '../styles/styles.css';

import React, { ChangeEvent, FormEvent, useState } from 'react';

import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {


    const { formData, onChange, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })
    const { name, email, password1, password2 } = formData

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        console.log(formData)
    }
    return (
        <div>
            <h1>Register page</h1>

            <form action="" noValidate onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' name='name' value={name} onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`} />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input type="email" placeholder='Email' name='email' value={email} onChange={onChange} />
                {!isValidEmail(email) && <span>El email no es valido</span>}

                <input type="password" placeholder='Password' name='password1' value={password1} onChange={onChange} />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La constraseña debe tener 6 caracteres</span>}

                <input type="password" placeholder='Repeat Password' name='password2' value={password2} onChange={onChange} />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas no son iguales </span>}

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset form</button>
            </form>
        </div>
    )
}
