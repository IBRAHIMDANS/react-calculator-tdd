import React from 'react';
import { Button } from '@material-ui/core';
import { KeyboardList } from '../utils/keyboardList';


const KeyboardPanel = ({ onClick }: any) => {
  return (
    <>
      <div className='panel'>
        {KeyboardList.map((item, key) => {
          return (<span key={item.label}>
              {(key % 4 === 0) && <br />}
              <Button
                key={item.label}
                variant={'outlined'}
                name={item.label}
                onClick={() => onClick(item.value)}
              >
                {item.label}
              </Button>
            </span>
          );
        })}
      </div>
    </>
  );
};


export default KeyboardPanel;
