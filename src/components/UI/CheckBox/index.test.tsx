import { render, screen } from '@/lib/.jest/test-utils';

import { CheckBox } from '.';

describe('CheckBox', () => {
  it('should render the heading', () => {
    render(<CheckBox />);

    // Assert
    screen.getByRole('heading', { name: /CheckBox/i });
  });
});
