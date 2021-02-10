import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Keyboard from './components/KeyboardPanel';

function App() {
  const [value, setValue] = useState<string>();
  return (
    <div className='App'>
      <Header />
      <p>{value}</p>
      <Keyboard onClick={(str: string) => setValue( str)} />
    </div>
  );
}

export default App;
