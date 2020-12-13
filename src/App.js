import React, { useContext } from 'react';

import { Header } from './components/header';
import { Client } from './components/client/client';
import { Applicants } from './components/applicants/applicants';
import { Result } from './components/result';
import { StateContext } from './StateContext';

function App() {
  const { result } = useContext(StateContext);

  return (
    <div className='App'>
      <Header />
      <Client />
      <Applicants />
      {result && <Result />}
    </div>
  );
}

export default App;
