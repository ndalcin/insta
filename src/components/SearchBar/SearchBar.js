import React from 'react'

const SearchBar = ({ query, handleInputChange }) => {
	return <input onChange={handleInputChange} value={query}/>
}

export default SearchBar
