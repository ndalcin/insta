import React from 'react'
import PostsList from '../../components/PostsList/PostsList'
import SearchBar from '../../components/SearchBar/SearchBar'

class SearchContainer extends React.Component {
	state = {
		query: '',
		posts: []
	}
	handleInputChange = e => {
		this.setState({ query: e.target.value })
	}
	handleSubmit = e => {
		e.preventDefault()
		console.log('testing')
	}
	fetchPosts = () => {
		console.log('in fetch posts')
	}
	render() {
		return (
			<div>
				<PostsList posts={this.state.posts} />
				<SearchBar
					handleInputChange={this.handleInputChange}
					query={this.state.query}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		)
	}
}

export default SearchContainer
