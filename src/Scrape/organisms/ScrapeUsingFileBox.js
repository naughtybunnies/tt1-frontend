import React, { Component } from "react";
import styled from "styled-components";

import MenuBox from "../atoms/MenuBox";
import MenuIndicator from "../atoms/MenuIndicator";
import FileUploadForm from "../molecules/FileUploadForm";

const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export default class ScrapeMethodMenuBox extends Component {
    render() {
        const { repositoryName } = this.props;
        return (
            <MenuBox>
                <RowFlex>
                    <MenuIndicator upText="1" lowText="Scrape" />
                </RowFlex>
                <FileUploadForm repositoryName={repositoryName}/>
            </MenuBox>
        );
    }
}
