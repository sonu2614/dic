import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function History() {
    const store = useSelector((state) => state.history);

    return (
        <div className="wrapper">
            <div className="words">
                <h1>Search History</h1>
                {store.length === 0 ? (
                    <p>No items found.</p>
                ) : (
                    store.map((item) => {
                        return (
                            <li>
                                <Link to={`/word/${item.word}`} state={item}>
                                    {item.word}
                                </Link>
                            </li>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default History;
