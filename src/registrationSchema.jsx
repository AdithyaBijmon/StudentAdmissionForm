import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name:yup.string().min(2).required("Please enter your name"),
    email:yup.string().email("Enter a valid email").required("Please enter your email"),
    dob:yup.date().required("This field is required"),
    mobile:yup.string().matches("^[789][0-9]{9}$","Mobile number must start with 7,8 or 9 and should be 10 digits").required('This field is required'),
    gender:yup.string().required("Select a gender"),
    subject:yup.string().required("This field is required"),
    address:yup.string().required("Please enter your address")
})