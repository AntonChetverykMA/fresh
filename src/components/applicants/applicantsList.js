import { Box } from '@material-ui/core';
import { useEffect, useContext } from 'react';
import { request } from '../../api';
import { StateContext, DispatchContext } from '../../StateContext';

import { ApplicantsListItem } from './applicationsListItem';

export const ApplicantsList = () => {
  const dispatch = useContext(DispatchContext);
  const { client, applicants } = useContext(StateContext);

  useEffect(() => {
    if (client) {
      request(`applicants/?filter[client:id]=${client.id}`).then((data) =>
        dispatch({ type: 'SET_APPLICANTS', payload: data.items })
      );
    }
  }, [client, dispatch]);

  return (
    <Box>
      {applicants &&
        applicants.map((applicant) => (
          <ApplicantsListItem applicant={applicant} key={applicant.id} />
        ))}
    </Box>
  );
};
