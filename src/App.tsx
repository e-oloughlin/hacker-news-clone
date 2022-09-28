import { Container, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Stories from './components/Stories';

const App = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h3"
        sx={{
          color: orange['A700'],
          margin: '20px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <SupportAgentIcon sx={{ fontSize: '60px', mr: '10px' }} />
        Hacker News
      </Typography>
      <Stories />
    </Container>
  );
}

export default App;
