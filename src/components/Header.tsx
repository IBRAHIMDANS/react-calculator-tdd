import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledHeader = styled.div`
  .MuiTypography-body1 {
    margin-top: 2em;
    color: blue;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Typography > React Calculator TDD</Typography>
    </StyledHeader>
  );
};

export default Header;
