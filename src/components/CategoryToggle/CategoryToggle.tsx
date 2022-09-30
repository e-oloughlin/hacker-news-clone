import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import type { Category } from '../../models';

interface Props {
  category: Category;
  onChange: (newCategory: Category) => void;
  loading: boolean;
}

const CategoryToggle = ({ category, onChange, loading }: Props) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: Category,
  ) => {
    // newCategory can be null in some edge cases
    if (newCategory) {
      onChange(newCategory)
    }
  };

  return (
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
  )
}

export default CategoryToggle;
