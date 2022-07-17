import React from 'react';
import { screen } from '@testing-library/react';
import { setup } from '../testUtils';

import Button from './Button';

describe('Button component', () => {
  it('displays the label prop and calls onClick when clicked', async () => {
    const onClick = jest.fn();
    const { user } = setup(<Button label='foo' onClick={onClick} />);

    await user.click(screen.getByText('foo'));

    expect(onClick).toHaveBeenCalled();
  });
});
