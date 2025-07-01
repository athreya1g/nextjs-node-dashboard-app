
import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';

jest.mock('../hooks/useUser', () => () => ({
  user: { name: 'Test User', email: 'test@example.com' }
}));

test('renders user info in sidebar', () => {
  render(<Sidebar />);
  expect(screen.getByText('Test User')).toBeInTheDocument();
  expect(screen.getByText('test@example.com')).toBeInTheDocument();
});
