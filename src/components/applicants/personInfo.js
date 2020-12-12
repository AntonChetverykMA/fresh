import React from 'react';

import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

export function PersonInfo() {
  return (
    <>
      <Grid container direction='row' justify='space-around' spacing={3}>
        <Grid item xs={6}>
          <TextField id='name' label='Назва' fullWidth />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id='name-origin'
            label='Назва мовою походження'
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container direction='row' justify='space-around' spacing={3}>
        <Grid item xs={6}>
          <TextField id='adress' label='Адреса' fullWidth />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id='adress-origin'
            label='Адреса мовою походження'
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
