import { Chip } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';

interface Props {
  count: number;
}

const UpVotes = ({ count }: Props) => {
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <Chip
      icon={<ThumbUpIcon />}
      label={`${hasVoted ? count + 1 : count} upvotes`}
      variant="filled"
      color={hasVoted ? 'primary' : 'default'}
      sx={{ padding: 1 }}
      title="Vote count"
      onClick={() => setHasVoted(!hasVoted)}
    />
  );
}

export default UpVotes;
