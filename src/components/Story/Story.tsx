import { Card } from '@mui/material';
import type { ItemID } from '../../models';
import StoryHeader from './StoryHeader';
import StoryFooter from './StoryFooter';
import CommentCount from '../CommentCount';
import UpVotes from '../UpVotes';
import { useStory } from '../../services/hooks';

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
    <Card data-id={id} sx={{ marginBottom: '20px' }}>
      <StoryHeader
        id={id}
        url={url}
        title={title}
        time={time}
        by={by}
      />
      <StoryFooter>
        <CommentCount count={descendants} />
        <UpVotes count={score} />
      </StoryFooter>
    </Card>
  );
};

export default Story;
