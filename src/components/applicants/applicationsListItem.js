import { Box, Checkbox } from '@material-ui/core';
import { useState } from 'react';

export const ApplicantsListItem = ({ applicant }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color='primary'
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <span>
        <b>{`${applicant.name}`}</b>, {`${applicant.address.address}`}
      </span>
    </Box>
  );
};
