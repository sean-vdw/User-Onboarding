import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long'),
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Please enter an email address'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Please submit a password'),
  tos: yup
    .boolean()
    .oneOf([true], 'You must agree to the Terms of Service'),
})

export default formSchema;