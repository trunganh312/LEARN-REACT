import { Box, Checkbox, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';

FilterService.propTypes = {
  onChange: PropTypes.func,
};
const useStyle = makeStyles()((theme) => {
  return {
    ul: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
  };
});
function FilterService({ onChange, filters }) {
  const { classes } = useStyle();

  const handleChange = (e) => {
    onChange({
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <Box>
      <h3>Dịch vụ</h3>
      <ul className={classes.ul}>
        {[
          { value: 'isPromotion', label: 'Có khuyễn mãi' },
          { value: 'isFreeShip', label: 'Miễn phí vận chuyển' },
        ].map((service) => {
          return (
            <li key={service.value}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Boolean(filters[service.value])}
                    onChange={handleChange}
                    name={service.value}
                  />
                }
                label={service.label}
              />
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default FilterService;
