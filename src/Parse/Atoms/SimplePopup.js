import React from "react";
import styled from "styled-components";

import {
    Field,
    Label,
    Control,
    Textarea
} from "react-bulma-components/lib/components/form";

const Container = styled.div`
    width: 40vw;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    background-color: #fff;
    visibility: ${props => props.visibility}
    top: ${props => props.top}px;
    left: ${props => props.left}px;
`;

const Header = styled.div`
    width: 100%;
    height: 3em;
    background-color: #f2f2f2;
    text-align: center;
    display: inline-block;
    line-height: 3em;
`;

const DisplayArea = styled.div`
    width: 100%;
    height: 20em;
    padding: 1em 1em 1em 1em;
    color: #888;
`;

export default function SimplePopup(props) {
    return (
        <Container {...props}>
            <Header>
                <b>Node content</b>
            </Header>
            <DisplayArea>
                
                <Field>
                <Label>Text below will be parsed into a new column</Label>
                <Control>
                    <Textarea
                        className="has-fixed-size"
                        rows={8}
                        readOnly={true}
                        value={props.content || "<---- blank node ---->"}
                    />
                </Control>
            </Field>
            </DisplayArea>
            
        </Container>
    );
}
