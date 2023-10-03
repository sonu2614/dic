import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/Actions/searchAction";
import Meaning from "./Meaning";
import loading_gif from "../loading.gif";
function Home() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const { data, error, loading } = useSelector((state) => state);

    function handleClick() {
        dispatch(fetchData(input.trim()));
    }
    return (
        <div className="home">
            <div className="search">
                <input
                    placeholder="Search..."
                    type="text"
                    value={input}
                    id="searchBar"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleClick} id="search-btn">
                    Search
                </button>
            </div>
            <div className="result">
                {loading && (
                    <img
                        id="loading"
                        src={loading_gif}
                        alt="loading please wait..."
                    />
                )}
                {!loading && error && (
                    <div className="error">
                        {error.message}
                        {error.response &&
                            error.response.data &&
                            error.response.data.title && (
                                <p>{error.response.data.title}</p>
                            )}
                    </div>
                )}
                {!loading &&
                    !error &&
                    data &&
                    data.map((obj) => {
                        return <Meaning data={obj} />;
                    })}
            </div>
        </div>
    );
}

export default Home;
