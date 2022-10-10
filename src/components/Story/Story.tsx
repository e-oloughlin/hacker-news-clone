import { forwardRef, memo } from 'react';
import { Card } from '@mui/material';
import type { ItemID, Item } from '../../models';
import StoryHeader from './StoryHeader';
import StoryFooter from './StoryFooter';
import CommentCount from '../CommentCount';
import SkeletonStory from '../SkeletonStory';
import UpVotes from '../UpVotes';
import useRequest from '../../hooks/useRequest';
import { singleStory } from '../../utils';

interface Props {
  id: ItemID
}

const Story = forwardRef(({ id }: Props, ref) => {
  const { data: story, loading, error } = useRequest<Item>(singleStory(id));

  if (loading) {
    return (
      <SkeletonStory />
    );
  }

  if (!story || error) {
    return null;
  }

  const { url, title, time, by, score, descendants } = story;

  return (
    // Typescript has a problem with the ref, ignore, for now.
    // @ts-ignore-next-line
    <Card ref={ref} data-id={id} sx={{ marginBottom: '20px' }}>
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
});

export default memo(Story);
