import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  Link,
} from '@material-ui/core';

import { PersonInfo } from './personInfo';

const useStyles = makeStyles((theme) => ({
  title: { color: 'grey', margin: '10px 0' },
  form: { flexGrow: 1 },
  add: {
    marginTop: theme.spacing(2),
  },
  radioContainer: { flexDirection: 'row' },
  select: { width: '40%', margin: '20px 0' },
  register: {
    flexGrow: 1,
    margin: '20px 0',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    marginLeft: '20px',
  },
}));

export function ApplicationForm() {
  const classes = useStyles();
  const [person, setPerson] = React.useState('Фізична особа');
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handlePersonChange = (event) => {
    setPerson(event.target.value);
  };

  return (
    <Box>
      <Typography className={classes.title}>Додати нового</Typography>

      <form className={classes.form} noValidate autoComplete='off'>
        <FormControl component='fieldset'>
          <RadioGroup
            aria-label='person'
            name='person'
            value={person}
            onChange={handlePersonChange}
            className={classes.radioContainer}
          >
            <FormControlLabel
              value='Фізична особа'
              control={<Radio color='primary' />}
              label='Фізична особа'
            />
            <FormControlLabel
              value='Юридична особа'
              control={<Radio color='primary' />}
              label='Юридична особа'
            />
          </RadioGroup>
        </FormControl>

        <Box>
          <FormControl variant='outlined' className={classes.select}>
            <InputLabel id='country-title'>Country</InputLabel>
            <Select
              labelId='country-title'
              id='countru-select'
              value={country}
              onChange={handleChange}
              label='Country'
            >
              <MenuItem value={'Ukraine'}>Україна</MenuItem>
              <MenuItem value={'USA'}>США</MenuItem>
              <MenuItem value={'Spain'}>Іспанія</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box className={classes.register}>
          <TextField
            id='register-number'
            label='ЄДРПОУ'
            variant='outlined'
            style={{ width: '50%' }}
          />
          <Link
            href='https://usr.minjust.gov.ua/content/free-search'
            target='_blank'
            className={classes.link}
          >
            Знайти в ЄДР
          </Link>
        </Box>

        <PersonInfo />

        <Box className={classes.add}>
          <Button variant='outlined' color='primary'>
            Додати
          </Button>
        </Box>
      </form>
    </Box>
  );
}
