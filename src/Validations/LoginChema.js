import * as Yup from "yup";
import { memo } from "react";

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('This Field is Required'),
    password: Yup.string()
        .required('This Field is Required')
        .min(6, 'Too Short!')
        .max(70, 'Too Week!'),
});


