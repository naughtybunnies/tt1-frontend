import React from "react";
import styled from "styled-components";

import { Box, Content } from "react-bulma-components";

const Card = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.color || "#ee5466"};
    height: 15em;
    cursor: ${props => props.onClick ? "pointer" : "default"}
`;

const TextArea = styled.div`
    color: #ffffff
    width: 70%;
    h2 {
        font-size: 2.5em;
    }
`;

const ImageArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 30%;
`;

const VerticalCentering = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export default function OptionCard(props) {
    return (
            <Card {...props}>
                <TextArea>
                    <h2>
                        <b>{props.title || "props.title"}</b>
                    </h2>
                    <p>{props.subtitle || "props.subtitle"}</p>
                </TextArea>
                <ImageArea>
                    <VerticalCentering>
                        {props.img || (
                            <img
                                src="./somepic.jpg"
                                alt="nothing here"
                                style={{ display: "inline" }}
                            />
                        )}
                    </VerticalCentering>
                </ImageArea>
            </Card>
    );
}
