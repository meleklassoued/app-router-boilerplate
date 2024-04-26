import { render } from '@/lib/.jest/test-utils';

import RowCheckbox from './RawCheckbox';

describe('Button renderer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RowCheckbox name="Test name" label="test label" />,
    );

    expect(baseElement).toBeTruthy();
  });
});
