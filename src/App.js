import React, { useState } from 'react'
// import styled from 'styled-components'
import Styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyles';

// let color ;
const App = () => {
  const Button = Styled.button`
  color:${({ bg }) => bg.col};
  background-color:${({ bg }) => bg.bg};
  outline:none;
  // border:none;
  cursor:pointer;
  display:block;
  width:${({ theme }) => theme.width};
  height:10rem;
&:hover{
  background-color:${() => color.bg === 'red' ? 'blue' : 'red'};
  color:white;
}
  `;
  const theme = {
    width: '12rem',
    bgColorBody: 'blue'
  }
  const [color, setColor] = useState({ bg: 'red', col: 'blue' });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ width: '10rem', backgroundColor: 'blue', margin: '0 auto' }}>
        <Button bg={color} onClick={() => { color.bg === 'red' ? setColor({ ...color, bg: 'blue', col: 'red' }) : setColor({ ...color, bg: 'red', col: 'blue' }); }}>Subscribe to me</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
