import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './couterSlice';

import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 32,
      padding: '0 30px',
    },
  };
});

function CounterFeature() {
  const { classes } = useStyles();
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const action = increment();
    dispatch(action);
  };
  const handleDecrement = () => {
    const action = decrement();
    dispatch(action);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button className={classes.root} onClick={handleDecrement}>
        Decrement
      </Button>
      <Button className={classes.root} onClick={handleIncrement}>
        Increment
      </Button>
    </div>
  );
}

export default CounterFeature;
