import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', mb: '20px' }}>
    <CircularProgress size={60} />
  </Box>
);

export default Loader;
