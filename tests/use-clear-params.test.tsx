import React from 'react';

import { render } from '@testing-library/react';

import useClearParams from '../src/use-clear-params';

describe('useClearParams tests', () => {
  it('should mount without errors with no params', () => {
    function Component() {
      useClearParams();
      return <div>test</div>;
    }

    expect(() => render(<Component />)).not.toThrow();
  });
});
