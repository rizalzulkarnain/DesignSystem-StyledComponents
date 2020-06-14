import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import GlobalStyle from './GlobalStyle';

import Header from './layouts/Header';
import { theme, themeTwo } from './Theme';
import { Button, CancelButton, Card } from './elements';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <GlobalStyle />
          <main
            css={`
              background: lightgreen;
              padding: 4px;
              h2 {
                color: magenta;
              }
            `}
          >
            <Button modifiers="standard">standard</Button>
            <ThemeProvider theme={themeTwo}>
              <Card>
                <h2>Card Text</h2>
                <div>
                  <Card.Button typeStyle="yes">submit</Card.Button>
                </div>
                <br />
                <div>
                  <Card.Button as="a">As Button</Card.Button>
                </div>
              </Card>
            </ThemeProvider>
            <Button modifiers="small">small</Button>
            <Button modifiers={['small', 'cancel']}>small cancel</Button>
            <CancelButton modifiers="cancel">cancel</CancelButton>
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
