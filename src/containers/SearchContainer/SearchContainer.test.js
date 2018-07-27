import React from 'react'
import { shallow } from 'enzyme'
import SearchContainer from './SearchContainer'
import PostsList from '../../components/PostsList/PostsList'
import SearchBar from '../../components/SearchBar/SearchBar'

describe('SearchContainer', () => {
	let searchContainer;
	const BASE_STATE = { query: '', posts: [] }
	beforeEach(() => {
		searchContainer = shallow(<SearchContainer />)
	})

	it('should render a <div />', () => {
		expect(searchContainer.find('div').length).toEqual(1)
	})

	it('should render PostsList', () => {
		expect(searchContainer.containsMatchingElement(<PostsList posts={searchContainer.instance().state.posts} />)).toEqual(true)
	})
	it('should render SearchBar', () => {
		expect(searchContainer.containsMatchingElement(<SearchBar handleInputChange={searchContainer.instance().handleInputChange} query={searchContainer.instance().state.query}/>)).toEqual(true)
	})
	it('should initialize with a state with query and posts', () => {
		expect(searchContainer.state()).toEqual(BASE_STATE)
	})

	it('should render correctly', () => {
		expect(searchContainer).toMatchSnapshot()
	})
})

describe('user interactions', () => {
	it('the query in state should change when a user types into the searchBar')
	it('the posts in state should change when a user clicks on submit')
})
