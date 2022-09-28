import { render, screen } from '@testing-library/react';
import UpVotes from './UpVotes';

test('renders a title', () => {
  render(<UpVotes count={246} />);
  const display = screen.getByText(/246 upvotes/i);
  expect(display).toBeInTheDocument();
});
