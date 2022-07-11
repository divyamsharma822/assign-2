import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./App.scss";

const App = () => {
    const [search, setSearch] = useState("Minions");
    const [data, setData] = useState([]);
    const [jsondata, setJsonData] = useState({});

    useEffect(() => {
        if (!search) {
        } else {
            fetchAPI();
        }

        // eslint-disable-next-line
    }, [search]);

    const fetchAPI = async () => {
        const res = await fetch(
            `https://www.omdbapi.com/?s=${search}&apikey=db5167ff`,
            {
                method: "GET",
            }
        );
        const movies = await res.json();

        if (movies.Response === "False") {
            setData([]);
        } else if (movies.Response === "True") {
            setData(movies.Search);
            setJsonData(movies);
        }
    };

    return (
        <div className='app'>
            <h1>Movie Library</h1>
            <div className='header'>
                <input
                    placeholder='Search'
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type='button'>LogIn</button>
            </div>

            <div className='card-container'>
                {jsondata.Response === "True" ? (
                    data
                        .map((curr) => (
                            <Card
                                key={curr.imdbID}
                                picurl={curr.Poster}
                                title={curr.Title}
                            />
                        ))
                        .slice(0, 5)
                ) : (
                    <h1>`${jsondata.Response}`</h1>
                )}
            </div>
        </div>
    );
};

export default App;
