import { render } from '@/lib/.jest/test-utils';

import RawInput from '.';

describe('Button renderer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RawInput
        name="Test name"
        label="test label"
        placeholder="input placeholder"
        type="text"
      />,
    );

    expect(baseElement).toBeTruthy();
  });
});
