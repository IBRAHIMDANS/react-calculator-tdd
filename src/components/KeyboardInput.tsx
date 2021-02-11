import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  background-color: #bbb3b3b5;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  height: 1.5em;
`;

const KeyboardInput = ({ input, onChange }: any) => {
  const [result, setResult] = useState<number | string>(input);

  useEffect(() => {

    if(input !== 'C' || 'CE') {
      setResult(`${result + input}`);
    }
    return () => {
      setResult(0);
    };
  }, [input, onChange]);

  switch (input) {
    case '+':
      console.log('++');
      break;
    case '=':
      console.log(result,'result');
      break;
  }
  return (
    <Panel>
      {result}
    </Panel>
  );
};


export default KeyboardInput;
