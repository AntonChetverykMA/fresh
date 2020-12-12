import { Header } from './components/header';
import { Client } from './components/client/client';
import { Applicants } from './components/applicants/applicants';

function App() {
  return (
    <div className='App'>
      <Header />
      <Client />
      <Applicants />
    </div>
  );
}

export default App;
