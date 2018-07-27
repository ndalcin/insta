import React from 'react'
import { shallow, mount } from 'enzyme'
import SearchContainer from './SearchContainer'
import PostsList from '../../components/PostsList/PostsList'
import SearchBar from '../../components/SearchBar/SearchBar'

describe('SearchContainer', () => {
	let searchContainer
	const BASE_STATE = { query: '', posts: [] }
	beforeEach(() => {
		searchContainer = shallow(<SearchContainer />)
	})

	it('should render a <div />', () => {
		expect(searchContainer.find('div').length).toEqual(1)
	})

	it('should render PostsList', () => {
		expect(
			searchContainer.containsMatchingElement(
				<PostsList posts={searchContainer.instance().state.posts} />
			)
		).toEqual(true)
	})
	it('should render SearchBar', () => {
		expect(
			searchContainer.containsMatchingElement(
				<SearchBar
					handleInputChange={searchContainer.instance().handleInputChange}
					query={searchContainer.instance().state.query}
				/>
			)
		).toEqual(true)
	})
	it('should initialize with a state with query and posts', () => {
		expect(searchContainer.state()).toEqual(BASE_STATE)
	})

	it('should render correctly', () => {
		expect(searchContainer).toMatchSnapshot()
	})
})

describe('mounted SearchContainer', () => {
	let wrapper
	beforeEach(() => {
		wrapper = mount(<SearchContainer />)
	})
	it('calls handleInputChange when a user types in the SearchBar', () => {
		const spy = jest.spyOn(wrapper.instance(), 'handleInputChange')
		wrapper.instance().forceUpdate()
		expect(spy).toHaveBeenCalledTimes(0)
		wrapper.find('input').simulate('change')
		expect(spy).toHaveBeenCalledTimes(1)
	})
	it('calls handleSubmit when a user clicks the search gifs button', () => {
		const spy = jest.spyOn(wrapper.instance(), 'handleSubmit')
		wrapper.instance().forceUpdate()
		expect(spy).toHaveBeenCalledTimes(0)
		wrapper.find('button').simulate('click')
		expect(spy).toHaveBeenCalledTimes(1)
	})
})

describe('handleInputChange', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<SearchContainer />)
	})

	it('updates the value of query', () => {
		wrapper.instance().handleInputChange({ target: { value: 'test' } })
		expect(wrapper.state('query')).toEqual('test')
		wrapper.instance().handleInputChange({ target: { value: 'sriracha' } })
		expect(wrapper.state('query')).toEqual('sriracha')
	})
})
