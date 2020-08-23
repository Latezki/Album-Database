import React, { useState } from "react";

function SearchArea(props) {

    const [searchTerm, setSearchTerm] = useState("");
    const [sortSelection, setSortSelection] = useState("");

    // Handles the search term text input functions
    function handleChange(event) {
        const term = event.target.value;
        setSearchTerm(term);
        props.onSearch(term);
    }

    // Handles the sort select dropdown menu functions
    function handleSort(event) {
        const selection = event.target.value;
        setSortSelection(selection);
        props.onSelection(selection);
    }

    return ( 
        <div className="search-area">
            <h1>Search any album by artist or album name</h1>
            <form>
                <input type="text" 
                name="searchtext" 
                onChange={handleChange} 
                value={searchTerm} 
                placeholder="Search..."
                onKeyPress={(e) => {
                    e.key === "Enter" && e.preventDefault();
                }}  
                />
                <select name="sort" onChange={handleSort} value={sortSelection}>
                    <option value="default">Sort</option>
                    <option value="artist-ascending">Artist A-Z</option>
                    <option value="artist-descending">Artist Z-A</option>
                    <option value="album-ascending">Album A-Z</option>
                    <option value="album-descending">Album Z-A</option>
                </select>
            </form>
        </div>
    );
}

export default SearchArea;

