import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

function InputField({ name, form, label }) {
  const { formState } = form;
  const hasError = formState.errors[name];

  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, name, value } }) => (
          <TextField
            margin="normal"
            value={value}
            label={label}
            fullWidth
            onChange={onChange}
            name={name}
            error={!!hasError}
            id="outlined-error-helper-text"
            helperText={hasError?.message}
          />
        )}
      />
    </div>
  );
}

export default InputField;
