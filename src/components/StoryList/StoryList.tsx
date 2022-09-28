import Story from '../Story';
import { useTopStoryIDs } from '../../services/hooks';

export const StoryList = () => {
  const topStoryIDs = useTopStoryIDs(10);

  if (!topStoryIDs) {
    return null;
  }

  return (
    <section>
      {topStoryIDs.map((id) => (
        <Story key={id} id={id} />
      ))}
    </section>
  );
};

export default StoryList;
