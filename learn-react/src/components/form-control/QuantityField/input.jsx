import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { makeStyles } from 'tss-react/mui';
QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
  },
}));

function QuantityField({ name, form, label }) {
  const { formState, setValue } = form;
  const hasError = formState.errors[name];
  const { classes } = useStyles();
  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, name, value } }) => (
          <Box className={classes.root}>
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <TextField
              type="number"
              margin="normal"
              value={value}
              label={label}
              width="200px"
              onChange={onChange}
              name={name}
              error={!!hasError}
              id="outlined-error-helper-text"
              helperText={hasError?.message}
            />
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                )
              }
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        )}
      />
    </div>
  );
}

export default QuantityField;
