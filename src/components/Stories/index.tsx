import Story from '../Story';
import { useTopStoryIDs } from '../../services/api';

const Stories = () => {
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

export default Stories;
