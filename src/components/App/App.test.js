import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import SearchContainer from '../../containers/SearchContainer/SearchContainer'

describe('App', () => {
	let app
	beforeEach(() => {
		app = shallow(<App />)
	})

	it('should render a <div />', () => {
		expect(app.find('div').length).toEqual(1)
	})
	it('should render the SearchContainer component', () => {
		expect(app.find(SearchContainer).length).toBe(1)
	})
})

// Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.
