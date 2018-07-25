import React from 'react'
import PostsList from '../../components/PostsList/PostsList'
import SearchBar from '../../components/SearchBar/SearchBar'

class SearchContainer extends React.Component {
	state = {
		query: '',
		posts: []
	}
	render() {
		return (
			<div>
				<PostsList />
				<SearchBar query={''} />
			</div>
		)
	}
}

export default SearchContainer
