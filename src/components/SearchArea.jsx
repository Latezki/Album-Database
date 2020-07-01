import React, { useState } from "react";

function SearchArea(props) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(event) {

        const term = event.target.value;

        setSearchTerm(term);
        props.onSearch(term);
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
            </form>
        </div>
    );
}

export default SearchArea;

