import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Bubble = styled.div`
    background-color: ${props => props.bubbleColor};
    text-align: center;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin: 0px 5px;
    cursor: ${props => (props.clickable ? "pointer" : "")};
`;

const TextArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const LargeText = styled.div`
    color: black;
    font-size: 2em;
`;

const NormalText = styled.div`
    color: black;
    font-size: 1em;
`;

const CreateLinkToBubble = (bubble, linkTo) => {
    return <Link to={linkTo}>{bubble}</Link>;
};

export default class RepositoryCardBubble extends Component {
    render() {
        let {
            upText,
            midText,
            lowText,
            bubbleColor,
            clickable,
            linkTo
        } = this.props;
        upText = upText || "Unavail";
        midText = midText || "Unavail";
        lowText = lowText || "Unavail";
        bubbleColor = bubbleColor || "azure";

        let SimpleBubble = (
            <Bubble bubbleColor={bubbleColor} clickable={clickable}>
                <TextArea>
                    <NormalText>{upText}</NormalText>
                    <LargeText>{midText}</LargeText>
                    <NormalText>{lowText}</NormalText>
                </TextArea>
            </Bubble>
        );

        return linkTo ? CreateLinkToBubble(SimpleBubble, linkTo) : SimpleBubble;
    }
}
