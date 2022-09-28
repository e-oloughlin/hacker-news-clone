import { Chip } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

interface Props {
  count: number;
}

const UpVotes = ({ count }: Props) => (
  <Chip
    icon={<ThumbUpIcon />}
    label={`${count} upvotes`}
    variant="filled"
    sx={{ padding: 1 }}
  />
);

export default UpVotes;
