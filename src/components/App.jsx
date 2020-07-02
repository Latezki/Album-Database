import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchArea from "./SearchArea";
import AlbumItem from "./AlbumItem";
import albums from "../albums";
import Grid from "@material-ui/core/Grid";

function App() {

    const [albumList, setAlbumList] = useState(albums);

    function searchAlbumList(searchTerm) {
        
        const term = searchTerm.toLowerCase();
        
        if(term === "") {
            setAlbumList(albums);
        } else {
            setAlbumList(() => {
                return albums.filter((albumItem, index) => {
                    return albumItem.album.toLowerCase().includes(term) || albumItem.artist.toLowerCase().includes(term);
                });
            });
        }  
    }

    return (
        <div>
            <div className="main-container">
                <Header />
                <SearchArea onSearch={searchAlbumList} />
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
                <Footer />
            </div>
        </div>
    );
}

export default App;