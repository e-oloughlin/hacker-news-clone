import dayjs from 'dayjs';
import {
  CardHeader,
  Avatar,
  Link,
  Divider
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { indigo } from '@mui/material/colors';

interface Props {
  url?: string;
  title: string;
  time: number;
  by: string;
}

const StoryHeader = ({ url, title, time, by }: Props) => (
  <>
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
  </>
);

export default StoryHeader;
