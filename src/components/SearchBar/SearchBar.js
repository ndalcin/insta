import React from 'react'

const SearchBar = ({ query, handleInputChange, handleSubmit }) => {
	return (
		<div>
			<input onChange={handleInputChange} value={query} />
			<button onClick={handleSubmit} type="submit">
				search gifs
			</button>
		</div>
	)
}

export default SearchBar
