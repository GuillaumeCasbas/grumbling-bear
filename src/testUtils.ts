import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const setup = (jsx: React.ReactElement) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

export default {};
