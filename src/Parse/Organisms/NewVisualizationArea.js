import React, { useState } from "react";
import styled from "styled-components";

import { Box } from "react-bulma-components";


import VisNetwork from "../Atoms/VisNetworkNoPopup"
import ControlArea from "../Molecules/ControlArea";

const VisArea = styled.div`
    height: ${props => props.fullscreenVisualizer ? "80vh" : "50vh"};
    display: flex;
    flex-direction: row;
    margin-top: 1em;
`

const StyledBox = styled(Box)`
    margin: 0em 1em 1em 1em;
`;

const handleToggleFullscreen = () => {

}

export default function VisualizerArea(props) {
    const [fullscreenVisualizer, setFullscreenVisualizer] = useState(true);
    const [selectedNode, setSelectedNode] = useState(null);

    return (
        <VisArea fullscreenVisualizer={fullscreenVisualizer}>
            <StyledBox style={{"width": "60%"}}>
                <VisNetwork
                    repositoryName={props.repositoryName}
                    setSelectedNode={setSelectedNode}/>
            </StyledBox>

            <StyledBox style={{"width": "40%"}}>
                <ControlArea selectedNode={selectedNode} repositoryName={props.repositoryName} setFullscreenVisualizer={() => setFullscreenVisualizer(!fullscreenVisualizer)} fullscreenVisualizer={fullscreenVisualizer}/>
            </StyledBox>
        </VisArea>
    );
}
