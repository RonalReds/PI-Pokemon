/* import { useState } from "react";



export const useForm = (initialForm, validationForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
   


    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleBlur = (event) => { 
        handleChange(event);
        setErrors(validationForm(form));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validationForm(form));

       
    };


    const handleTypes = (event) => {
        setForm({
            ...form,
            types: event.target.value
     })       
    }


    return {
        form,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        handleTypes
    }

}
 */