import React, { useState } from "react";
import styled from "styled-components";

import { Box } from "react-bulma-components";

import MenuBar from "../Molecules/MenuBar";
import MyNetwork from "../Atoms/MyNetwork";
import VisNetwork from "../Atoms/VisNetwork"

const VisArea = styled.div`
    height: ${props => props.fullscreenVisualizer ? "80vh" : "50vh"};
    display: flex;
    flex-direction: row;
`

const StyledBox = styled(Box)`
    margin: 0em 1em 1em 1em;
`;

export default function VisualizerArea(props) {
    const [fullscreenVisualizer, setFullscreenVisualizer] = useState(true);
    const [selectedNode, setSelectedNode] = useState(null);

    const handleToggleFullscreen = () => {
        setFullscreenVisualizer(!fullscreenVisualizer);
    };

    return (
        <VisArea fullscreenVisualizer={fullscreenVisualizer}>
            {/* <MenuBar
                toggleFullscreen={handleToggleFullscreen}
                repositoryName={props.repositoryName}
                selectedNode={selectedNode}
            /> */}

            <StyledBox style={{"width": "60%"}}>
                <VisNetwork
                    repositoryName={props.repositoryName}
                    setSelectedNode={setSelectedNode}/>
            </StyledBox>

            <StyledBox style={{"width": "40%"}}>
                
            </StyledBox>
        </VisArea>
    );
}
