import { useContext } from 'react';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ClientSeacrh } from './clientSearch';
import Submit from '../submit';
import { StateContext } from '../../StateContext';

const useStyles = makeStyles((theme) => ({
  container: { marginTop: theme.spacing(1) },
  paper: {
    padding: theme.spacing(2),
  },
  submit: {
    marginTop: theme.spacing(2),
  },
  list: {
    margin: '20px 0',
    paddingLeft: theme.spacing(2),
    '& li': { listStyleType: 'none' },
  },
}));

export const Client = () => {
  const classes = useStyles();
  const { client } = useContext(StateContext);

  return (
    <Box className={classes.container}>
      <Container>
        <Paper className={classes.paper}>
          <Typography
            component='h1'
            variant='h5'
            style={{ marginBottom: '10px' }}
          >
            Клієнт
          </Typography>
          <ClientSeacrh />
          <Box>
            {client ? (
              <ul className={classes.list}>
                <li>
                  <b>{client.name}</b>
                </li>
                <li>{client.email}</li>
                <li>{client.phone}</li>
              </ul>
            ) : null}
          </Box>
          <Box className={classes.submit}>
            <Submit />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
