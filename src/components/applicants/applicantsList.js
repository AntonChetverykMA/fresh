import { FormGroup } from '@material-ui/core';
import { useEffect, useContext } from 'react';
import { request } from '../api/api';
import { StateContext, DispatchContext } from '../context/StateContext';

import { ApplicantsListItem } from './applicantsListItem';
import * as types from '../context/types';

export const ApplicantsList = () => {
  const dispatch = useContext(DispatchContext);
  const { client, applicants, newApplicants } = useContext(StateContext);
  const allApplicants = [...applicants, ...newApplicants];

  useEffect(() => {
    if (client) {
      request(`applicants/?filter[client:id]=${client.id}`).then((data) => {
        const apllicants = data.items.slice(0, 3); //limited the number of applicants
        dispatch({ type: types.SET_APPLICANTS, payload: apllicants });
      });
    } else {
      dispatch({ type: types.SET_APPLICANTS, payload: [] });
      dispatch({ type: types.RESET_NEW_APPLICANTS, payload: [] });
    }
  }, [client, dispatch]);

  return (
    <FormGroup>
      {allApplicants.length > 0 &&
        allApplicants.map((applicant) => (
          <ApplicantsListItem applicant={applicant} key={applicant.id} />
        ))}
    </FormGroup>
  );
};
