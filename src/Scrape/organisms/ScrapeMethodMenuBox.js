import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Content } from "react-bulma-components";

import MenuBox from "../atoms/MenuBox";
import ScrapePrimaryKeyBubble from "../molecules/ScrapePrimaryKeyBubble";
import ScrapeUrlBubble from "../molecules/ScrapeUrlBubble";
import MenuIndicator from "../atoms/MenuIndicator";

const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const ColFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    align-items: center;
`;
export default class ScrapeMethodMenuBox extends Component {
    render() {
        const { repositoryName } = this.props;

        return (
            <MenuBox>
                <RowFlex>
                    <MenuIndicator upText="1" lowText="Scrape" />
                </RowFlex>

                <RowFlex>
                    <ColFlex>
                        <Link to={"/scrape-pk/" + repositoryName}>
                            <ScrapePrimaryKeyBubble />
                            <Content>
                                <br />
                                <h2>Scrape Using Primary Key</h2>
                                <p>
                                    Suitable for websites that use ascending
                                    number in url
                                </p>
                            </Content>
                        </Link>
                    </ColFlex>
                    <ColFlex>
                        <ScrapeUrlBubble />
                        <Content>
                            <br />
                            <h2>Scrape Using URLs from text file</h2>
                            <p>Suitable for specific requirement</p>
                        </Content>
                    </ColFlex>
                </RowFlex>
            </MenuBox>
        );
    }
}
