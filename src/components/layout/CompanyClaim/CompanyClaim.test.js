import { shallow } from 'enzyme';
import React from 'react';

import CompanyClaim from './CompanyClaim';

describe('CompanyClaim', () => {
  it('renders without crashing', () => {
    shallow(<CompanyClaim />);
  });
});
