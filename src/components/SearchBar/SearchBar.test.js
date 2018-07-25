import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
	let searchBar
	let query = ''
	beforeEach(() => {
		searchBar = shallow(<SearchBar query={query}/>)
	})

	it('should render an <input />', () => {
		expect(searchBar.find('input').length).toEqual(1)
	})
	it('should receive a prop from its parent that sets the value of the input', () => {

		expect(searchBar.find('input').text()).toBe(query)
	})
})
