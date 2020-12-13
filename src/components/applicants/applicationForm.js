import { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';
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
import { DispatchContext } from '../../StateContext';

const useStyles = makeStyles((theme) => ({
  title: { color: 'grey', margin: '10px 0' },
  form: { flexGrow: 1 },
  add: {
    marginTop: theme.spacing(2),
  },
  radioContainer: { flexDirection: 'row' },
  select: { width: '30%', margin: '20px 0' },
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

export function ApplicationForm({ setIsShownForm }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [person, setPerson] = useState('Фізична особа');
  const [country, setCountry] = useState('');
  const personInfoInitial = {
    name: '',
    address: '',
    'name-origin': '',
    'address-origin': '',
  };
  const [personInfo, setPersonInfo] = useState(personInfoInitial);
  const [innCode, setInnCode] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handlePersonChange = (event) => {
    setPerson(event.target.value);
  };

  const handleRegisterChange = (event) => {
    setInnCode(event.target.value);
  };

  const reset = () => {
    setCountry('');
    setPerson('Фізична особа');
    setInnCode('');
    setPersonInfo(personInfoInitial);
  };

  const addNewApllicant = () => {
    const applicationInfo = {
      person,
      country,
      name: personInfo.name,
      address: { address: personInfo.address },
      'name-origin': personInfo['name-origin'],
      'address-origin': personInfo['address-origin'],
      innCode,
      id: uuidv4(),
      isAdded: true,
    };
    dispatch({ type: 'ADD_NEW_APPLICANT', payload: applicationInfo });
    reset();
    setIsShownForm(false);
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
              onChange={handleCountryChange}
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
            style={{ width: '40%' }}
            value={innCode}
            onChange={handleRegisterChange}
          />
          <Link
            href='https://usr.minjust.gov.ua/content/free-search'
            target='_blank'
            className={classes.link}
          >
            Знайти в ЄДР
          </Link>
        </Box>

        <PersonInfo
          setPersonInfo={setPersonInfo}
          country={country}
          personInfo={personInfo}
        />

        <Box className={classes.add}>
          <Button variant='outlined' color='primary' onClick={addNewApllicant}>
            Додати
          </Button>
        </Box>
      </form>
    </Box>
  );
}
