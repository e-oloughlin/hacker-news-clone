import { Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface Props {
  title: string;
}

const PageHeader = ({ title }: Props) => (
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
);

export default PageHeader;
