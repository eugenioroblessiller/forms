import React, { ChangeEvent, useState } from 'react';

export const useForm = <T>(initState: T) => {

    const [formData, setFormData] = useState(initState)

    const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value
        }))
    }


    return {
        ...formData,
        formData,
        onChange
    }
}
