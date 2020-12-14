import { useEffect, useState, useContext } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, CircularProgress } from '@material-ui/core';

import { DispatchContext } from '../context/StateContext';
import { request } from '../api/api';
import * as types from '../context/types';

export const ClientSeacrh = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const dispatch = useContext(DispatchContext);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await request('clients');
      const users = await response;

      if (active) {
        setOptions(users.items);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <>
      <Autocomplete
        autoComplete
        onChange={(e, value) =>
          dispatch({ type: types.SET_CLIENT, payload: value })
        }
        id='asynchronous-demo'
        style={{ width: '40%' }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.label}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Client search'
            variant='outlined'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color='inherit' size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </>
  );
};
