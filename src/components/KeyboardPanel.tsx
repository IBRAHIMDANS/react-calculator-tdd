import React from 'react';
import { Button } from '@material-ui/core';
import { KeyboardList } from '../utils/keyboardList';


const KeyboardPanel = ({ onClick }:any) => {
  return (
    <>
      <div className='pannel'>
        {KeyboardList.map((item, key) => {
          return (<>
              {(key % 4 === 0) && <br />}
              <Button
                key={item.label}
                variant={'outlined'}
                name={item.label}
                onClick={() => onClick(item.value)}
              >
                {item.label}
              </Button>
            </>
          );
        })}
      </div>
    </>
  );
};


export default KeyboardPanel;
