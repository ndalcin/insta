import React from 'react'
import PostsList from '../../components/PostsList/PostsList'
import SearchBar from '../../components/SearchBar/SearchBar'

class SearchContainer extends React.Component {
	render() {
		return (
			<div>
				<PostsList />
				<SearchBar />
			</div>
		)
	}
}

export default SearchContainer
