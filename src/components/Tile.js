import React from "react";

function Tile({image, title, text}) {
    if (text === "") {
        return (
            <section>
                <img src={image}/>
            </section>
        );
    } else {
        return (
            <section>
                <h2>{title}</h2>
                <p>{text}</p>
            </section>
        );
    }
}

export default Tile;