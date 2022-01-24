import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    bg: '#282c34',
    font: 'white'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <Container>
        my react project
      </Container>
      </>
    </ThemeProvider>
  )
}

export default App;
