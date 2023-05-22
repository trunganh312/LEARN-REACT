import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

function PasswordField({ name, form, label }) {
  const { formState } = form;
  const hasError = formState.errors[name];
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, name, value } }) => (
        <FormControl
          error={!!hasError}
          fullWidth
          margin="normal"
          variant="outlined"
        >
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <OutlinedInput
            id={name}
            type={showPassword ? 'text' : 'password'}
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error={!!hasError} id="my-helper-text">
            {hasError?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default PasswordField;
