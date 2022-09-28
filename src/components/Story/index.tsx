import type { ItemID } from '../../models';

interface Props {
  id: ItemID
}

const Story = ({ id }: Props) => {
  return <p>{id}</p>;
};

export default Story;
