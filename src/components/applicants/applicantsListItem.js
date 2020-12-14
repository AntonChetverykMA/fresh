import { Button } from '@material-ui/core';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { useState } from 'react';

import { StateContext, DispatchContext } from '../context/StateContext';
import { useContext } from 'react';
import * as types from '../context/types';

export const ApplicantsListItem = ({ applicant }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useContext(DispatchContext);
  const { newApplicants, selectedApplicants } = useContext(StateContext);

  const handleChange = (event) => {
    const { checked } = event.target;

    if (checked) {
      dispatch({ type: types.ADD_NEW_SELECTED_APPLICANT, payload: applicant });
    } else {
      const filtredSelectedApplicants = selectedApplicants.filter(
        (item) => item.id !== applicant.id
      );

      dispatch({
        type: types.DELETE_SELECETED_APPLICANT,
        payload: filtredSelectedApplicants,
      });
    }

    setChecked(checked);
  };

  const removeItem = (id) => {
    const filtredApplicants = newApplicants.filter((item) => item.id !== id);

    dispatch({ type: types.DELETE_APPLICANT, payload: filtredApplicants });
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          disabled={applicant.isAdded}
          checked={checked}
          onChange={handleChange}
          color='primary'
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      }
      label={
        <>
          <span>
            <b>{`${applicant.name}`}</b>, {`${applicant.address.address}`}
          </span>
          {applicant.isAdded && (
            <Button onClick={removeItem.bind(null, applicant.id)}>X</Button>
          )}
        </>
      }
    />
  );
};
