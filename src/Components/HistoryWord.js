import React from "react";
import { useLocation } from "react-router-dom";
import Meaning from "./Meaning";

function Test() {
    const location = useLocation();
    const data = location.state.data;
    console.log("inside renderHistory", data);
    return (
        <div className="wrapper">
            <div className="word-history">
                {data &&
                    data.map((obj) => {
                        return <Meaning data={obj} />;
                    })}
            </div>
        </div>
    );
}

export default Test;
