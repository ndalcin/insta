import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
	let searchBar
	beforeEach(() => {
		searchBar = shallow(<SearchBar />)
	})

	it('should render a <div />', () => {
		expect(searchBar.find('div').length).toEqual(1)
	})
})
