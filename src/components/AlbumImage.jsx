import React from "react";

function AlbumImage(props) {
    return <img className="album-img" src={process.env.PUBLIC_URL + props.albumimg} alt="album cover"/>
}

export default AlbumImage;