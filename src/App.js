import React from 'react';
import './App.css';
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourstory from "./assets/our_story.png";
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    name="to the collection"
                    disabled="false"
                />
                <Button
                    name="shop all bags"
                    disabled="false"
                />
                <Button
                    name="pre-orders"
                    disabled="true"
                />
            </nav>
            <main>
                <Product
                    label="Best seller"
                    image={bag1}
                    title="The Handy bag"
                    price="€400,-"
                />
                <Product
                    label="Best seller"
                    image={bag2}
                    title="The stylish bag"
                    price="€250,-"
                />
                <Product
                    label="New collection"
                    image={bag3}
                    title="The simple bag"
                    price="€300,-"
                />
                <Product
                    label="New collection"
                    image={bag4}
                    title="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tile
                    image=""
                    title="THE BRAND"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
                />
                <Tile
                    image={brand}
                    title=""
                    text=""
                />
                <Tile
                    image={ourstory}
                    title=""
                    text=""
                />
                <Tile
                    image=""
                    title="our story"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
                />
            </footer>
        </>
    );
}

export default App;