import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { purple, elevation, fixed, serif } from '../utilities';

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className="logo" />
    <span>
      <h1>Header</h1>
    </span>
  </header>
);

export default styled(Header)`
  display: flex;
  background: ${purple};
  padding: 10px 5%;
  width: 100%;
  ${serif}
  ${fixed()}
  ${elevation[2]};

  .logo {
    width: 60px;
  }
`;
