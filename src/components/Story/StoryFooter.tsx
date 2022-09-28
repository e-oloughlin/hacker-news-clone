import React from 'react';
import { CardActions } from '@mui/material';

interface Props {
  children: React.ReactNode
}

const StoryFooter = ({ children }: Props) => (
  <CardActions
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      pl: 2,
      pr: 2
    }}
  >
    {children}
  </CardActions>
);

export default StoryFooter;
