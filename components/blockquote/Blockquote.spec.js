
import React from 'react'
import { shallow } from 'enzyme'

import Blockquote from './Blockquote'

describe('Blockquote component', () => {

  it("should render properly", function() {
    const wrapper = shallow(<Blockquote>Some text inside</Blockquote>)

    expect(wrapper).toMatchSnapshot()
  });
})
