import React from "react";
import AlbumImage from "./AlbumImage";

function AlbumItem(props) {
    return (
        <div className="album-item">
                <AlbumImage albumimg={props.albumimg} />
                <p>{props.album}</p>
                <p>{props.artist}</p>
        </div>
    );
}

export default AlbumItem;