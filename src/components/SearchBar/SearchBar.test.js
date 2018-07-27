import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
	let searchBar

	beforeEach(() => {
		searchBar = shallow(
			<SearchBar
				handleSubmit={jest.fn()}
				handleInputChange={jest.fn()}
				query={''}
			/>
		)
	})

	it('should render correctly', () => {
		expect(searchBar).toMatchSnapshot()
	})
})
