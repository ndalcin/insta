import React from 'react'
import { shallow } from 'enzyme'
import SearchContainer from './SearchContainer'

describe('SearchContainer', () => {
	let searchContainer
	beforeEach(() => {
		searchContainer = shallow(<SearchContainer />)
	})

	it('should render a <div />', () => {
		expect(searchContainer.find('div').length).toEqual(1)
	})
	it('should render PostsList', () => {
		expect(searchContainer.find('PostsList').exists()).toBe(true)
	})
	it('should render SearchBar', () => {
		expect(searchContainer.find('SearchBar').exists()).toBe(true)
	})
	it('fetches data from api and returns promise', () => {
		expect.assertions(1)
		return fetchData().then(data => {
			expect(data).toBe()
		})
	})
})
