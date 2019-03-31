import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledButton = styled(FontAwesomeIcon)`
    font-size: 2em;
    cursor: pointer;
    margin: 0.25em 0.5em 0.25em 0.5em;
`;

const ToolTip = styled.p`
    visibility: ${props => (props.visibility ? "visible" : "hidden")};
    position: absolute;
    margin-top: 0em;
    margin-left: 3em;
    z-index: 3;
    background-color: #ffffff;
    padding: 0.25em 0.25em 0.25em 0.25em;
    border-style: solid;
    border-width: 1px;
`;

export default function BaseButton(props) {
    const [visibility, setVisibility] = useState(false);

    return (
        <div
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
            onClick={props.onClick}
        >
            <StyledButton icon={props.icon || faSquare} />
            <ToolTip visibility={visibility}>
                {props.tooltip || "tooltip"}
            </ToolTip>
        </div>
    );
}
