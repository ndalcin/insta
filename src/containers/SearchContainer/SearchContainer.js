import React from 'react'
import PostsList from '../../components/PostsList/PostsList'
import SearchBar from '../../components/SearchBar/SearchBar'

class SearchContainer extends React.Component {
	state = {
		query: '',
		posts: []
	}
	handleInputChange = () => {
		console.log('in handle input change')
	}
	handleSubmit = () => {
		console.log('in handle submit')
	}

	fetchPosts = () => {
		console.log('in fetch posts')
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
