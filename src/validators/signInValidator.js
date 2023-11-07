import * as yup from 'yup';

export const signInValidator = yup.object().shape({
    email: yup
    .string()
    .email()
    .required("Email is required por dios"),
    password: yup
    .string()
    .min(8)
    .max(16)
    .required("Password is required"),
});