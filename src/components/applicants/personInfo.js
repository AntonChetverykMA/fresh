import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

export function PersonInfo({ setPersonInfo, country, personInfo }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setPersonInfo((info) => ({ ...info, [name]: value }));
  };

  return (
    <>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={6}>
          <TextField
            value={personInfo.name}
            id='name'
            label='Назва'
            name='name'
            onChange={handleChange}
            variant='outlined'
            fullWidth
          />
        </Grid>

        {country !== 'Ukraine' && (
          <Grid item xs={6}>
            <TextField
              value={personInfo['name-origin']}
              id='name-origin'
              label='Назва мовою походження'
              name='name-origin'
              onChange={handleChange}
              variant='outlined'
              fullWidth
            />
          </Grid>
        )}
      </Grid>

      <Grid container direction='row' spacing={3}>
        <Grid item xs={6}>
          <TextField
            value={personInfo.address}
            id='address'
            label='Адреса'
            name='address'
            onChange={handleChange}
            variant='outlined'
            fullWidth
          />
        </Grid>

        {country !== 'Ukraine' && (
          <Grid item xs={6}>
            <TextField
              value={personInfo['address-origin']}
              id='address-origin'
              label='Адреса мовою походження'
              name='address-origin'
              onChange={handleChange}
              variant='outlined'
              fullWidth
            />
          </Grid>
        )}
      </Grid>
    </>
  );
}
