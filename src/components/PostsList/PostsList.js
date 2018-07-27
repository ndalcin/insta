import React from 'react'
import Post from '../Post/Post'

const PostsList = ({ posts }) => {
	return (
		<div>
			{posts.length > 0
				? posts.map(post => <Post key={post.id} post={post} />)
				: null}
		</div>
	)
}

export default PostsList
