import React, { Component } from "react";
import styled from "styled-components";

const BoxCaption = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    text-align: center;
    border-color: #4a4a4a;
    border-style: solid;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default class MenuIndicator extends Component {
    static defaultProps = {
        upText: "undefined",
        lowText: "undefined"
    };

    render() {
        const { upText, lowText } = this.props
        return (
            <BoxCaption>
                <p>{ upText }</p>
                <b>{ lowText }</b>
            </BoxCaption>
        );
    }
}
