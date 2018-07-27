import React from 'react'
import { shallow } from 'enzyme'
import PostsList from './PostsList'
import Post from '../Post/Post'

describe('PostsList', () => {
	let wrapper
	let posts = [{ id: 1 }, { id: 2 }, { id: 3 }]
	beforeEach(() => {
		wrapper = shallow(<PostsList posts={[]} />)
	})

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should render Post components based on number of posts in posts prop', () => {
		wrapper.setProps({ posts: posts })
		expect(wrapper.find(Post).length).toEqual(posts.length)
	})
})
