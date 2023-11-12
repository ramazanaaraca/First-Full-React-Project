import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('This Field is Required'),
    surName: Yup.string()
        .required('This Field is Required'),
    firstName: Yup.string()
        .required('This Field is Required'),
    phone: Yup.string()
        .required('This Field is Required'),
    password: Yup.string()
        .required('Password is required')
        .min(5, 'Your password is too short.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmpassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    gender: Yup.string()
        .required('You Have To Choose One Of Them'),
    accept: Yup.string()
        .required('You Have To Accept'),    
});
