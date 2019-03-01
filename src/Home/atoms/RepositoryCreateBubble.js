import React, { Component } from "react";
import styled from "styled-components";

const BubbleCircle = styled.div`
    background-color: #daebe8;
    text-align: center;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin: 0px 5px;
`;

const TextArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
`;

const LargeText = styled.div`
    color: black;
    font-size: 4em;
`;

const NormalText = styled.div`
    color: black;
    font-size: 1em;
`;

export default class RepositoryNewRepositoryBubble extends Component {
    render() {
        return (
            <div>
                <BubbleCircle className="selenium-create-bubble">
                    <TextArea onClick={this.props.onClick}>
                        <LargeText>+</LargeText>
                        <NormalText>Add Repo</NormalText>
                    </TextArea>
                </BubbleCircle>
            </div>
        );
    }
}
