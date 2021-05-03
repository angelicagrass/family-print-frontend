import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import { ThemeProvider } from 'styled-components'

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './theme/globalstyles.js'
import Theme from './theme/theme.js'

ReactDOM.render(
    <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
