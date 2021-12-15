import * as yup from 'yup';

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters long'),
  last_name: yup
    .string()
    .trim()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters long'),
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