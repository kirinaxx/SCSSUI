import React, { useState } from "react";
import './SearchBar.css';
import axios from 'axios';
import { getAllPosts } from "../service/postService";

function SearchBar(props) {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
        if(searchInput == "")
        getAllPosts().then(res => {
            res.data = res.data.filter(x => x.parentId == null);
            props.setPosts(res.data);
        })
    };

    const handleSearch = () => {
        // Here you can make an API request to search for keywords
        if(searchInput != "")
        axios.post("http://localhost:8080/api/posts/search", searchInput)
            .then(response => {
                // Handle the response data, for example:
                console.log("Search results:", response.data);
                // Pass the search results to the parent component
                //props.onSearch(response.data);

                props.setPosts(response.data);
            })
            .catch(error => {
                console.error("Error searching for keywords:", error);
            }) 
            else 
            getAllPosts().then(res => {
                res.data = res.data.filter(x => x.parentId == null);
                props.setPosts(res.data);
            })
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
