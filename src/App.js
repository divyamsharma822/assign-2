import React from "react";
import Card from "./Card";
import "./App.scss";

const data = [
    {
        pic: "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg",
        title: "Avengers: Endgame",
    },
    {
        pic: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
        title: "Doctor Strange in the Multiverse of Madness",
    },
    {
        pic: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg",
        title: "Shang-Chi and The Legend of The Ten Rings",
    },
    {
        pic: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
        title: "Black Widow",
    },
    {
        pic: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_06.jpg",
        title: "Eternals",
    },
    {
        pic: "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg",
        title: "Avengers: Endgame",
    },
    {
        pic: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
        title: "Doctor Strange in the Multiverse of Madness",
    },
    {
        pic: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg",
        title: "Shang-Chi and The Legend of The Ten Rings",
    },
    {
        pic: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
        title: "Black Widow",
    },

];
const App = () => {
    return (
        <div className='app'>
            <h1>Movie Library</h1>

            <div className='card-container'>
                {data.map((curr) => (
                    <Card picurl={curr.pic} title={curr.title} />
                ))}
            </div>
        </div>
    );
};

export default App;
