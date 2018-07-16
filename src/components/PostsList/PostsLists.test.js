import React from 'react'
import { shallow } from 'enzyme'
import PostsList from './PostsList'

describe('PostsList', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<PostsList />)
	})

	it('should render a <div />', () => {
		expect(wrapper.find('div').length).toEqual(1)
	})
	// it('should render Post components', () => {
	//
	// })
})
