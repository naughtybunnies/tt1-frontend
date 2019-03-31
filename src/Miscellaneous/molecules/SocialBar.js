import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 2em;
    margin: 0em 1em 0em 1em;
    display: inline-block;
    cursor: pointer;
`;

const BarContainer = styled.span`
    display: flex;
    flex-direction: row;
    a {
        color: #4a4a4a;
    }
`

export default function SocialBar(props) {
    return (
        <BarContainer>
            <a href={props.facebook}>
                <StyledIcon icon={faFacebookSquare} />
            </a>
            <a href={props.linkedin}>
                <StyledIcon icon={faLinkedin} />
            </a>
            <a href={props.github}>
                <StyledIcon icon={faGithub} />
            </a>
        </BarContainer>
    );
}
