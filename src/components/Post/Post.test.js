import React from 'react'
import { shallow } from 'enzyme'
import Post from './Post'

describe('Post', () => {
	let post
	beforeEach(() => {
		post = shallow(<Post />)
	})

	it('should render a <div />', () => {
		expect(post.find('div').length).toEqual(1)
	})
	it('should render an <h1 />', () => {
		expect(
			post
				.find('div')
				.childAt(0)
				.type()
		).toEqual('h1')
	})
})
