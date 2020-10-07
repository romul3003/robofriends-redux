import { shallow, mount, render} from 'enzyme'
// mount - needs full DOM rendering, has to run in environment
// that at least looks like browser environment
// mounts the component on a DOM

// render function - renders react component to a static html

import React from 'react'
import Card from './Card'

it('expect to render Card component', () => {
  expect(shallow(<Card/>).length).toEqual(1)
})

