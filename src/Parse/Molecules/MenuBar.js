import React from "react";
import styled from "styled-components";

import { Box } from "react-bulma-components";

import ExpandButton from "../Atoms/ExpandButton";
import FullScreenButton from "../Atoms/FullScreenButton";
import CreateColumnButton from "../Atoms/CreateColumnButton";
import SuppressNodeButton from "../Atoms/SuppressNodeButton";

const MenuBox = styled(Box)`
    display: inline-block;
    padding: 0.25em 0em 0.25em 0em;
    margin: 1em 1em 0em 1em;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function MenuBar(props) {

    return (
        <MenuBox>
            <FlexContainer>
                <ExpandButton targetNode={props.selectedNode ? props.selectedNode.id : "none"} repositoryName={props.repositoryName}/>
                <SuppressNodeButton />
                <CreateColumnButton />
                <p style={{ fontSize: "2em" }}>|</p>
                <FullScreenButton onClick={props.toggleFullscreen} />
                <p style={{ fontSize: "2em" }}>|</p>
                <p style={{ lineHeight: "3em", paddingRight: "0.5em" }}>
                    Repository Name :<b> {props.repositoryName || "mock"}</b>
                </p>
                <p style={{ fontSize: "2em" }}>|</p>
                <p style={{ lineHeight: "3em", paddingRight: "0.5em" }}>
                    Selected Node :<b> {props.selectedNode ? props.selectedNode.data : "none"}</b>
                </p>
            </FlexContainer>
        </MenuBox>
    );
}
