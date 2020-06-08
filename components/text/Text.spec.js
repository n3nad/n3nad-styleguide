
import React from 'react'
import { shallow } from 'enzyme'

import Text from './Text'

describe('Text component', () => {

  it("should render properly", function() {
    const wrapper = shallow(<Text><p>Some text inside</p></Text>)

    expect(wrapper).toMatchSnapshot()
  });
})
