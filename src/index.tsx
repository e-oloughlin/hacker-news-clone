import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { grey } from '@mui/material/colors';

dayjs.extend(relativeTime);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cssOverride = css`
*, *::after, *::before {
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  margin: 0;
  padding: 0;
}
body {
  background-color: ${grey[50]}
}
`;

root.render(
  <React.StrictMode>
    <Helmet>
      <title>Hacker News Clone</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <Global styles={cssOverride} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
