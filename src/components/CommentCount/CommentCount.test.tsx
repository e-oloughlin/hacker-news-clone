import { render, screen } from '@testing-library/react';
import CommentCount from './CommentCount';

test('renders a comment count', () => {
  render(<CommentCount count={56} />);
  const display = screen.getByText(/56 comments/i);
  expect(display).toBeInTheDocument();
});
