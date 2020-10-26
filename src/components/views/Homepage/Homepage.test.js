import { shallow } from 'enzyme';
import React from 'react';

import Homepage from './Homepage';

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(<Homepage />);
  });
});
