import React, { useContext } from 'react';

import Button from '@material-ui/core/Button';
import { StateContext, DispatchContext } from './context/StateContext';

export default function Submit() {
  const { newApplicants, selectedApplicants, client } = useContext(
    StateContext
  );
  const dispatch = useContext(DispatchContext);

  const onClick = () => {
    const applicantsIds = selectedApplicants.map((item) => item.id);
    const newApplicantsArrEdited = newApplicants.map((item) => ({
      name: item.name,
      address: item.address.address,
      country: item.country,
      code: item.innCode,
    }));
    const result = {
      clientId: client.id,
      applicantsIds,
      newApplicants: newApplicantsArrEdited,
    };

    dispatch({ type: 'SET_RESULT', payload: result });
  };

  return (
    <Button variant='contained' color='primary' onClick={onClick}>
      Зберегти заявку
    </Button>
  );
}
