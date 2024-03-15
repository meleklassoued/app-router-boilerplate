import Home from '../src/app/page';
import { screen, render } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    screen.getByRole('heading', { level: 1 });
  });
});
