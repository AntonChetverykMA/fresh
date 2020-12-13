import React, { useContext } from 'react';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { StateContext } from '../StateContext';

const useStyles = makeStyles((theme) => ({
  container: { marginTop: theme.spacing(1) },
  paper: {
    padding: theme.spacing(2),
  },
}));

export const Result = () => {
  const classes = useStyles();
  const { result } = useContext(StateContext);
  const formatedResult = JSON.stringify(result, undefined, 2);

  return (
    <Box className={classes.container}>
      <Container>
        <Paper className={classes.paper}>
          <Typography
            component='h2'
            variant='h5'
            style={{ marginBottom: '10px' }}
          >
            Result
          </Typography>
          <pre>{formatedResult}</pre>
        </Paper>
      </Container>
    </Box>
  );
};
