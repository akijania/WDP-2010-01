import { shallow } from 'enzyme';
import React from 'react';

import TopBar from './TopBar';

describe('TopBar', () => {
  it('renders without crashing', () => {
    shallow(<TopBar />);
  });
});
