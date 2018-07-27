import React from 'react'
import { shallow } from 'enzyme'
import PostsList from './PostsList'
import Post from '../Post/Post'

describe('PostsList', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<PostsList posts={[]}/>)
	})

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})
	it('should render Post components', () => {
		expect(wrapper.containsMatchingElement(<Post />)).toEqual(true)
	})
})
