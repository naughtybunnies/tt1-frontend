import React from "react";
import Navbar from "../../Template/Navbar";

export default function Documentation() {
    return (
        <div>
            <Navbar />
            Documentation
            <section className="section" style={{ height: "100vh" }} style={{"display": "flex", "justifyContent": "space-around"}}>
                <img
                    src={require("../atoms/under_construction.png")}
                    style={{ width: "40vw", height: "40vw" }}
                />
            </section>
        </div>
    );
}
