import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import SearchContainer from '../../containers/SearchContainer/SearchContainer'

// App should render properly
// App should render the SearchContainer component

describe('App', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />)
	})
	// it('should render a <div />', () => {
	// 	expect(wrapper.find('.App').length).toEqual(1)
	// })
	// it('should render the SearchContainer component', () => {
	// 	expect(wrapper.containsMatchingElement(<SearchContainer />)).toEqual(true)
	// })
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	})
})

// Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.
