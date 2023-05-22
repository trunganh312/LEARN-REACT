import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import QuantityField from 'components/form-control/QuantityField/input';
AddToCartForm.propTypes = {};

function AddToCartForm({ onSubmit }) {
  const schema = yup.object({
    quantity: yup
      .number()
      .min(1, 'Please enter at least 1.')
      .required('Please enter quantity.'),
  });
  const form = useForm({
    defaultValues: {
      quantity: 0,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (value) => {
    onSubmit(value);
  };
  return (
    <Box>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <QuantityField name="quantity" form={form} label="quantity" />
        <Button variant="contained" type="submit">
          Add To Cart
        </Button>
      </form>
    </Box>
  );
}

export default AddToCartForm;
