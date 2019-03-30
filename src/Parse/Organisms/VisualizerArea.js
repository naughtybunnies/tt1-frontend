import React, { useState } from "react";
import styled from "styled-components";

import { Box } from "react-bulma-components";

import MenuBar from "../Molecules/MenuBar";
import MyNetwork from "../Atoms/MyNetwork";

const StyledBox = styled(Box)`
    height: ${props => props.fullscreenVisualizer ? "80vh" : "50vh"};
    margin: 0em 1em 1em 1em;
`;

export default function VisualizerArea(props) {
    const [fullscreenVisualizer, setFullscreenVisualizer] = useState(true);
    const [selectedNode, setSelectedNode] = useState(null);

    const handleToggleFullscreen = () => {
        setFullscreenVisualizer(!fullscreenVisualizer);
    };

    return (
        <div>
            <MenuBar
                toggleFullscreen={handleToggleFullscreen}
                repositoryName={props.repositoryName}
            />
            <StyledBox fullscreenVisualizer={fullscreenVisualizer}>
                <MyNetwork
                    repositoryName={props.repositoryName}
                    selectedNode={selectedNode}
                />
            </StyledBox>
        </div>
    );
}
