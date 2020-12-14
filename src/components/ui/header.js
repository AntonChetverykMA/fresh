import { Container, AppBar, Typography, Toolbar } from '@material-ui/core';

export const Header = () => (
  <AppBar position='static'>
    <Container>
      <Toolbar>
        <Typography>Fresh digital agency</Typography>
      </Toolbar>
    </Container>
  </AppBar>
);
