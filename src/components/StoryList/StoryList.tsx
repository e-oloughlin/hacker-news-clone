import { useState, Fragment } from 'react';
import Story from '../Story';
import CategoryToggle from '../CategoryToggle';
import Loader from '../Loader';
import { useAllStories, useVisibility } from '../../hooks';
import type { Category } from '../../models';

export const StoryList = () => {
  const [category, setCategory] = useState<Category>('new');
  const { loading, storyIDs, pageNumber, incrementPageNumber, resetPageNumber } = useAllStories(category);

  const onVisible = () => incrementPageNumber();
  const shouldAbort = () => loading || pageNumber >= 50;
  const visibilityRef = useVisibility(onVisible, shouldAbort);

  const onCategoryChange = (value: Category) => {
    setCategory(value);
    resetPageNumber();
  };

  return (
    <>
      <CategoryToggle
        category={category}
        loading={loading}
        onChange={onCategoryChange}
      />
      {!storyIDs ? null : (
        <section>
          {storyIDs.map((id, index) => (
            <Fragment key={id}>
              {storyIDs.length === index + 1 ? (
                <Story ref={visibilityRef} id={id} />
              ) : (
                <Story id={id} />
              )}
            </Fragment>
          ))}
        </section>
      )}
      {pageNumber < 50 ? (
        <Loader />
      ) : null}
    </>
  );
};

export default StoryList;
