import React from "react";
import AlbumItem from "./AlbumItem";

function AlbumList(props) {
    return (
        <div className="album-list">            
            <AlbumItem 
                artist={props.artist}
                album={props.album}
                albumimg={props.albumimg}
            />
        </div>  
    );
}

export default AlbumList;