import { render, screen } from '@testing-library/react';
import './i18n';
import App from './App';

test('renders the game and Netlify attribution', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Смачна Гра|Tasty Game/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /powered by netlify/i })).toHaveAttribute(
    'href',
    'https://www.netlify.com/'
  );
});
