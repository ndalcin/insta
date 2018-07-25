import React from 'react'
import { shallow } from 'enzyme'
import SearchContainer from './SearchContainer'
import PostsList from '../../components/PostsList/PostsList'

describe('SearchContainer', () => {
	let searchContainer
	beforeEach(() => {
		searchContainer = shallow(<SearchContainer query=/>)
	})

	it('should render a <div />', () => {
		expect(searchContainer.find('div').length).toEqual(1)
	})
	it('should render PostsList', () => {
		expect(searchContainer.find(PostsList).length).toEqual(1)
	})
	it('should render SearchBar', () => {
		expect(searchContainer.find('SearchBar').exists()).toBe(true)
	})
<<<<<<< HEAD
	it('fetches data from api and returns promise', () => {
		expect.assertions(1)
		return fetchData().then(data => {
			expect(data).toBe()
		})
=======
	it('should initialize with a state with query:'' and posts:[]')

	describe('user interactions', () => {
		it('the query in state should change when a user types into the searchBar')
		it('the posts in state should change when a user clicks on submit')
>>>>>>> aceae0f7e6e18e60d2bf4767efbe3d50366bb298
	})
})
