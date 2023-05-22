import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../components/form-control/InputField/input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from 'tss-react/mui';
import PasswordField from '../../../components/form-control/PasswordField/input';
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      paddingTop: theme.spacing(2),
    },
    avatar: {
      margin: '0 auto',
      backgroundColor: theme.palette.secondary.main,
    },
    title: {
      margin: theme.spacing(1, 0, 2, 0),
      textAlign: 'center',
    },
    submit: {
      margin: theme.spacing(2, 0, 0, 0),
      width: '100%',
    },
    progress: {
      marginBottom: '20px',
    },
  };
});

function RegisterForm({ onSubmit }) {
  const { classes } = useStyles();
  const schema = yup.object({
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test(
        'should has at least two words',
        'Please enter at least two words.',
        (value) => {
          return value.split(' ').length >= 2;
        }
      ),
    email: yup
      .string()
      .required('Please enter your email address.')
      .email('Please enter invalid email address'),
    password: yup
      .string()
      .required('Please enter your password.')
      .min(6, 'Please enter at least 6 characters'),
    retypePassword: yup
      .string()
      .required('Please reset your password.')
      .oneOf([yup.ref('password')], 'Password does not match'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (values) => {
    await onSubmit(values);
    form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon></LockOutlinedIcon>
      </Avatar>
      <Typography variant="h5" component="h3" className={classes.title}>
        Create an account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField form={form} name="fullName" label="Full Name" />
        <InputField form={form} name="email" label="Email" />
        <PasswordField form={form} name="password" label="Password" />
        <PasswordField
          form={form}
          name="retypePassword"
          label="Retype Password"
        />
        <Button className={classes.submit} variant="contained" type="submit">
          CREATE AN ACCOUNT
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
