import React from "react";

import Navbar from "../../Template/Navbar";
import VisualizerArea from "../Organisms/VisualizerArea";
import PreviewTableArea from "../Organisms/PreviewTableArea";

export default function Parse(props) {    
    let repositoryName = props.match === undefined ? "mock" : props.match.params.repositoryName

    return (
        <div>
            <Navbar />
            <section className="section" style={{ padding: "0" }}>
                <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
                    <VisualizerArea repositoryName={repositoryName}/>
                    <hr />
                    <PreviewTableArea />
                </div>
            </section>
        </div>
    );
}
