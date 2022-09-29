import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Story from '../Story';
import { useAllStories } from '../../services/hooks';
import type { Category } from '../../models';

export const StoryList = () => {
  const [category, setCategory] = useState<Category>('new');
  const { loading, storyIDs } = useAllStories(category);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: Category,
  ) => {
    // newCategory can be null in some edge cases
    if (newCategory) {
      setCategory(newCategory)
    }
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={category}
        exclusive
        disabled={loading}
        onChange={handleChange}
        aria-label="Story category"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: '20px'
        }}
      >
        <ToggleButton value="new">New stories</ToggleButton>
        <ToggleButton value="top">Top stories</ToggleButton>
      </ToggleButtonGroup>
      {loading || !storyIDs ? null : (
        <section>
          {storyIDs.map((id) => (
            <Story key={id} id={id} />
          ))}
        </section>
      )}
    </>
  );
};

export default StoryList;
