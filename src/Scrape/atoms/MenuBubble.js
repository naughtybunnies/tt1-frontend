import React, { Component } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBong } from "@fortawesome/free-solid-svg-icons";

const Bubble = styled.div`
    --bubble-size: 40vh;

    background-color: #dff0f8;
    border-radius: calc(var(--bubble-size) / 2);
    border-color: #4a4a4a;
    border-style: solid;
    width: var(--bubble-size);
    height: var(--bubble-size);
    line-height: var(--bubble-size);
    font-size: 150px;
    text-align: center;
`;

const BubbleIcon = styled(FontAwesomeIcon)`
`;

export default class MenuBubble extends Component {
    static defaultProps = {
        icon: faBong
    };

    render() {
        const { icon } = this.props;

        return (
            <Bubble>
                <BubbleIcon icon={icon} />
            </Bubble>
        );
    }
}
