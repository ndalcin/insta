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

	fetchPosts = () => {
		console.log('in fetch posts')
	}
	render() {
		return (
			<div>
				<PostsList posts={this.state.posts}/>
				<SearchBar handleInputChange={this.handleInputChange} query={this.state.query}/>
			</div>
		)
	}
}

export default SearchContainer
