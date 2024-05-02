import React, { useState } from "react";
import './SearchBar.css';
import axios from 'axios';

function SearchBar(props) {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearch = () => {
        // Here you can make an API request to search for keywords
        axios.get(`your_api_endpoint?keywords=${searchInput}`)
            .then(response => {
                // Handle the response data, for example:
                console.log("Search results:", response.data);
                // Pass the search results to the parent component
                props.onSearch(response.data);
            })
            .catch(error => {
                console.error("Error searching for keywords:", error);
            });
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchInput}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
