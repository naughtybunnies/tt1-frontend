import React from "react";
import styled from "styled-components";

import ExpandButton from "../Atoms/ExpandButton";
import SuppressNodeButton from "../Atoms/SuppressNodeButton";
import FullScreenButton from "../Atoms/FullScreenButton";

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const MenuBlob = styled.div`
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-width: 0.1px;
    margin: 0em 1em 0em 1em;
`;

export default function NewMenuBar(props) {
    return (
        <MenuContainer>
            <MenuBlob>
                <ExpandButton
                    targetNode={props.selectedNodeId}
                    repositoryName={props.repositoryName}
                />
                <SuppressNodeButton
                    targetNode={props.selectedNodeId}
                    repositoryName={props.repositoryName}
                />
            </MenuBlob>

            <MenuBlob>
                <FullScreenButton onClick={props.setFullscreenVisualizer} />
            </MenuBlob>
        </MenuContainer>
    );
}
