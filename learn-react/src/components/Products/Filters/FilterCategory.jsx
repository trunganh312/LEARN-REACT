import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import categoryApi from '../../../api/categoryApi';
import { useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

FilterCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyle = makeStyles()((theme) => {
  return {
    root: {},
    menu: {
      padding: '0px',
      listStyleType: 'none',
      lineHeight: '30px',
      '& > li': {
        transition: 'all .25s',
        '&:hover': {
          cursor: 'pointer',
          color: theme.palette.primary.main,
        },
      },
    },
  };
});

function FilterCategory({ onChange }) {
  const { classes } = useStyle();
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await categoryApi.getAll();
        setCategoryList(
          data.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleClickCategory = (category) => {
    onChange(category.id);
  };
  return (
    <Box className={classes.root}>
      <h3>DANH MỤC SẢN PHẨM</h3>
      <ul className={classes.menu}>
        {categoryList.map((category) => {
          return (
            <li key={category.id} onClick={() => handleClickCategory(category)}>
              {category.name}
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default FilterCategory;
