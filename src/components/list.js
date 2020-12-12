import { useEffect, useContext } from 'react';
import { DispatchContext, StateContext } from '../StateContext';
import { Container, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const token =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDUxNjY4NTIsImV4cCI6MTYwNzc1ODg1Miwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImJ5Lmhhc2tlbGwifQ.PiLxggxQAwpLSRUivgbTfFw6uQ9P0iqwoRJ4Q0MqLyNN-Hrc_VRXNsaqO4KjDicwTTMAqZE2O0H3QjDI-pmbvnJcFEu-dIzCZGhHTMphbs_DuEow6UuPMKXmMEikQuxTeEx4IIZmRE2gsYn5D816mKo7u0STuWdA73jGghehFI2UVJIKMcdf-r1Vv-vQzSZTQLs7BsOpko7q1FpMhGDbtFGpJxJHJZxTMaWjel7m68jWwtjeSTTLStE5D5OHGsa5-vuuiFVXd6Xgy9BdlO5_VDF-CzDZZHOeMazLjPe_wPwsdXYJ5H8yLQTG7WEovxPdWmmK-OhpI4iHHxohY-Dq60TB9jKsAujfSor6pcBFtoVRW06pQ6vQiFxqTilb32YcRJXLcPL4loNFf0cwLxwSGfd52PdUdtYdaQJToNVfWJAYPC2VkvtLM_2lBQpO17IYuLFd0KaKulXGm4MaIFQtADIAI572oOjj69lEek5FcU5ZDG8AM4mVr1w8iDirrD-hNcoy03QiO7U6CVk7R1DQi87uvg3AAE60Ykty-liJ1bZi1opLW0yaCyh8fu2fF80vqrIoIKXn9HtIrOlVanuW4P5fdlmsCCVhJdcgNOx3AJqthCtLGyj3CRQhVTat0FXi8fj1FeLKTC9v2IC9DC7IczHwyWqGQI2E_DZTq0Q3BqM';

const useStyles = makeStyles((theme) => ({
  list: { marginTop: theme.spacing(1) },
  paper: { paddingTop: theme.spacing(1), paddingBottom: theme.spacing(1) },
}));

export const List = () => {
  const classes = useStyles();

  const dispatch = useContext(DispatchContext);
  const { users } = useContext(StateContext);

  useEffect(() => {
    fetch('http://lexberry.com.ua/api/v1/clients', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
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
