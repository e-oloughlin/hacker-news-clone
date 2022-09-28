import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';

test('renders a title', () => {
  render(<PageHeader title="Hacker News" />);
  const title = screen.getByText(/Hacker News/i);
  expect(title).toBeInTheDocument();
});
