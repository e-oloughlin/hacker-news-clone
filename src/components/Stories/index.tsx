import Story from '../Story';
import { useTopStoryIDs } from '../../services/api';

const Stories = () => {
  const [loading, topStoryIDs] = useTopStoryIDs();

  if (loading) {
    return null;
  }

  return (
    <>
      {topStoryIDs.map((id) => (
        <Story key={id} id={id} />
      ))}
    </>
  );
};

export default Stories;
