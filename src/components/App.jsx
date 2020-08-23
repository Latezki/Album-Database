import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchArea from "./SearchArea";
import AlbumItem from "./AlbumItem";
import albums from "../albums";
import Grid from "@material-ui/core/Grid";

function App() {

    const [albumList, setAlbumList] = useState(albums);

    // Updates the albumlist based on the user entered search term. If term is empty return the original list.
    function searchAlbumList(searchTerm) {
        const term = searchTerm.toLowerCase();
        if(term === "") {
            setAlbumList(albums);
        } else {
            setAlbumList(() => {
                return albums.filter((albumItem, index) => {
                    return albumItem.album.toLowerCase().includes(term) || albumItem.artist.toLowerCase().includes(term); // Filter returns both albums and artists that include the term
                });
            });
        }  
    }

    // Sorts the current albumlist from user selected option on dropdown menu. Default selection doesn't change anything.
    function sortAlbumList(selection) {
        var sortedList;

        if(selection === "artist-ascending") { 
            sortedList = [...albumList].sort((a, b) => { // Sorts list by artist A-Z
                if (a.artist.toLowerCase() < b.artist.toLowerCase()) return -1; // If a artist name is less than b artist name, then a artist name index is lower
                if (a.artist.toLowerCase() > b.artist.toLowerCase()) return 1; // If a artist name is greater than b artist name, then b artist name index is lower
                return 0; // a and b artist names are equal
            });
        } else if(selection === "artist-descending") { 
            sortedList = [...albumList].sort((a, b) => { // Sorts list by artist Z-A
                if (b.artist.toLowerCase() < a.artist.toLowerCase()) return -1; // If b artist name is less than a artist name, then b artist name index is lower
                if (b.artist.toLowerCase() > a.artist.toLowerCase()) return 1; // If b artist name is greater than a artist name, then a artist name index is lower
                return 0; // a and b artist names are equal
            });
        } else if(selection === "album-ascending") { 
            sortedList = [...albumList].sort((a, b) => { // Sorts list by album A-Z
                if (a.album.toLowerCase() < b.album.toLowerCase()) return -1;
                if (a.album.toLowerCase() > b.album.toLowerCase()) return 1;
                return 0;
            });
        } else if(selection === "album-descending") { 
            sortedList = [...albumList].sort((a, b) => { // Sorts list by album Z-A
                if (b.album.toLowerCase() < a.album.toLowerCase()) return -1;
                if (b.album.toLowerCase() > a.album.toLowerCase()) return 1;
                return 0;
            });
        } else if(selection === "default") {
            return 0;
        }

        setAlbumList(sortedList);
    }

    return (
        <div>
            <div className="main-container">
                <Header />
                <SearchArea onSearch={searchAlbumList} onSelection={sortAlbumList}/>
                <div className="grid-container">
                <Grid container spacing={4}>
                    {albumList.map((album, index) => {
                        return (
                            <Grid item md={3} sm={6} xs={12}>
                                <AlbumItem 
                                    key={index}
                                    id={album.id}
                                    artist={album.artist}
                                    album={album.album}
                                    albumimg={album.albumimg}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;