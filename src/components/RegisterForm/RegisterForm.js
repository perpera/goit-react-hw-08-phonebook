import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authorization/operations';
import {
  FormStyle,
  FormButton,
  FormError,
  FormField,
  FormLabel,
} from 'components/ContactForm/ContactForm.styled';

const validation = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(30, 'Name is too long')
    .required('Name is required!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password is too long')
    .required('Password is required!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <FormStyle>
        <FormLabel htmlFor="name">Username</FormLabel>
        <FormField
          type="text"
          name="name"
          id="name"
          autoComplete="on"
          placeholder="John Smith"
        />
        <FormError name="name" component="div" />

        <FormLabel htmlFor="email">Email</FormLabel>
        <FormField
          type="email"
          name="email"
          id="email"
          autoComplete="on"
          placeholder=""
        />
        <FormError name="email" component="div" />

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormField
          type="password"
          name="password"
          id="password"
          autoComplete="on"
          placeholder=""
        />
        <FormError name="password" component="div" />

        <FormButton type="submit">Register</FormButton>
      </FormStyle>
    </Formik>
  );
};
