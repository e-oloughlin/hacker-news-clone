import dayjs from 'dayjs';
import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  Divider,
  Chip,
  Link
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { indigo } from '@mui/material/colors';
import type { ItemID } from '../../models';
import { useStory } from '../../services/api';

interface Props {
  id: ItemID
}

const Story = ({ id }: Props) => {
  const story = useStory(id);

  if (!story) {
    return null;
  }

  const { url, title, time, by, score, descendants } = story;

  return (
    <Card sx={{ marginBottom: '20px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: indigo[300] }}>
            <InsertEmoticonIcon />
          </Avatar>
        }
        title={
          <>
            {url ? (
              <Link
                href={url}
                color="inherit"
                underline="hover"
                target="_blank"
                sx={{ display: 'flex' }}
              >
                {title} <LaunchIcon color="primary" sx={{ ml: '5px' }} />
              </Link>
            ) : (
              <>{title}</>
            )}
          </>
        }
        titleTypographyProps={{ fontSize: 18, fontWeight: '500' }}
        subheader={`${dayjs(time * 1000).fromNow()} by ${by}`}
      />
      <Divider variant="middle" role="presentation" />
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pl: 2,
          pr: 2
        }}
      >
        <Chip
          icon={<CommentIcon />}
          label={`${descendants || '0'} comments`}
          variant="filled"
          sx={{ padding: 1 }}
        />
        <Chip
          icon={<ThumbUpIcon />}
          label={`${score} upvotes`}
          variant="filled"
          sx={{ padding: 1 }}
        />
      </CardActions>
    </Card>
  );
};

export default Story;
