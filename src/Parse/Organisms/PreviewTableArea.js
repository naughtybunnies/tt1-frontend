import React, { Component } from "react";
import styled from "styled-components";

import { Box } from "react-bulma-components";

const StyledBox = styled(Box)`
    margin: 1em 1em 1em 1em;
    flex-grow: 1;

`;

export default class PreviewTableArea extends Component {
    render() {
        return <StyledBox />;
    }
}
