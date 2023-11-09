import * as Yup from "yup";

export const NewsSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('This Field is Required'),
    userName: Yup.string()
        .required('This Field is Required'),
    userSurname: Yup.string()
        .required('This Field is Required'),
    phone: Yup.string()
        .required('This Field is Required'),
   
});
