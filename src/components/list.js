import { useEffect, useContext } from 'react';
import { DispatchContext, StateContext } from '../StateContext';
import { Container, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { request } from '../api';

const useStyles = makeStyles((theme) => ({
  list: { marginTop: theme.spacing(1) },
  paper: { paddingTop: theme.spacing(1), paddingBottom: theme.spacing(1) },
}));

export const List = () => {
  const classes = useStyles();

  const dispatch = useContext(DispatchContext);
  const { users } = useContext(StateContext);

  useEffect(() => {
    request('clients').then((data) => {
      dispatch({ type: 'SET_USERS', payload: data.items });
    });
  }, [dispatch]);

  return (
    <Box className={classes.list}>
      <Container>
        <Paper className={classes.paper}>
          <ol>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ol>
        </Paper>
      </Container>
    </Box>
  );
};
