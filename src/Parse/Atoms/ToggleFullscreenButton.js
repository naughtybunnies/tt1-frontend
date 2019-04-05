import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ToggleButton = props => (
    <FontAwesomeIcon icon={faExpandArrowsAlt} onClick={props.onClick} />
);

const StyledToggleButton = styled.div`
    position: absolute;
    z-index: 1;
    margin-left: 90%;
    font-size: 2em;
    cursor: pointer;
`;

export default function ToggleFullscreenButton(props) {
    return (
        <StyledToggleButton>
            <ToggleButton onClick={props.onClick} />
        </StyledToggleButton>
    );
}
