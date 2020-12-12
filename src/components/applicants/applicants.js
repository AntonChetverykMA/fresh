import { useState } from 'react';
import { Box, Container, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ApplicationForm } from '../applicants/applicationForm';
import Submit from '../submit';
import { ApplicantsList } from './applicantsList';

const useStyles = makeStyles((theme) => ({
  root: { marginTop: theme.spacing(1), marginBottom: theme.spacing(2) },
  paper: {
    padding: theme.spacing(2),
  },
  add: { textDecoration: 'underline' },
  submit: {
    marginTop: theme.spacing(2),
  },
}));

export const Applicants = () => {
  const classes = useStyles();
  const [isShownForm, setIsShownForm] = useState(false);

  return (
    <Box className={classes.root}>
      <Container>
        <Paper className={classes.paper}>
          <Typography
            component='h2'
            variant='h5'
            style={{ marginBottom: '10px' }}
          >
            Заявники
          </Typography>
          <ApplicantsList />

          <Button
            color='primary'
            className={classes.add}
            onClick={() => setIsShownForm((oldState) => !oldState)}
          >
            + Додати
          </Button>

          {isShownForm && <ApplicationForm />}

          <Box className={classes.submit}>
            <Submit />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
