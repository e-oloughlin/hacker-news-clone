import Story from '../Story';
import { useTopStoryIDs } from '../../services/api';

export const StoryList = () => {
  const [loading, topStoryIDs] = useTopStoryIDs(10);

  if (loading) {
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
