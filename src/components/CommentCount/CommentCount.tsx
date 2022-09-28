import { Chip } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

interface Props {
  count: number;
}

const CommentCount = ({ count }: Props) => (
  <Chip
    icon={<CommentIcon />}
    label={`${count  || '0'} comments`}
    variant="filled"
    sx={{ padding: 1 }}
  />
);

export default CommentCount;
