import * as Yup from "yup";

export const CreateSchema = Yup.object().shape({
    mail: Yup.string()
        .email('Invalid email')
        .required('This Field is Required'),
});
