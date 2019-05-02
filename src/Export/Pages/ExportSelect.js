import React from "react";
import styled from "styled-components"

import ExportMenuBox from "../Orgnaisms/ExportMenuBox";
import Navbar from "../../Template/Navbar";

const DisplayArea = styled.div`
    margin: 3em;
`

export default function ExportSelect(props) {
    
    let repositoryName = props.match ? props.match.params.repositoryName : "mock"

    return (
        <div>
            <Navbar />
            <section className="section" style={{ padding: "0", height: "100%" }}>
                <DisplayArea>
                    <ExportMenuBox repositoryName={repositoryName}/>
                </DisplayArea>
            </section>
        </div>
    );
}
