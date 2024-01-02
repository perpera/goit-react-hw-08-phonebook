import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authorization/operations';
import {
  FormStyle,
  FormField,
  FormButton,
  FormLabel,
  FormError,
} from 'components/ContactForm/ContactForm.styled';

const validation = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password is too long')
    .required('Password is required!'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <FormStyle>
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

        <FormButton type="submit">Log in</FormButton>
      </FormStyle>
    </Formik>
  );
};
