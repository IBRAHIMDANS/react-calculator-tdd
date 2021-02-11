import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Keyboard from './components/KeyboardPanel';
import KeyboardInput from './components/KeyboardInput';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled(Grid)`
  max-width: 16em;
`;

function App() {
  const [value, setValue] = useState<string | number>(0);
  return (
    <div className='App'>
      <Header />
      <Grid container   justify={'center'}>
        <Container
          container
          justify={'center'}
          alignContent={'center'}
          direction={'column'}
        >
          <KeyboardInput
            input={value}
          />
          <Keyboard onClick={(str: string) => setValue(str)} />
        </Container>
      </Grid>
    </div>
  );
}

export default App;
