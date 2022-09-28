import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/react';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import App from './App';
import './fonts';

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
