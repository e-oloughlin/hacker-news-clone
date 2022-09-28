import { render, screen, fireEvent } from '@testing-library/react';
import UpVotes from './UpVotes';

test('renders a vote count', () => {
  render(<UpVotes count={246} />);
  const count = screen.getByText(/246 upvotes/i);
  expect(count).toBeInTheDocument();
});

test('user can upvote', () => {
  render(<UpVotes count={10} />);
  const count = screen.getByText(/10 upvotes/i);
  expect(count).toBeInTheDocument();

  fireEvent.click(count);
  const updatedCount = screen.getByText(/11 upvotes/i);
  expect(updatedCount).toBeInTheDocument();
});
