import React, { Component } from "react";
import styled from "styled-components";
import { Media, Box } from "react-bulma-components";

import RepositoryCardBubble from "../atoms/RepositoryCardBubble";
import RepositoryCardName from "../atoms/RepositoryCardName";
import RepositoryDeleteButton from "./RepositoryDeleteButton";

const RepositoryBubblesPanel = styled(Media.Item)`
    display: flex;
    flex-direction: row;
`;
const BoxWithMargin = styled(Box)`
    margin: 10px 10px 10px 10px;
`;

export default class RepositoryCard extends Component {
    static defaultProps = {
        repositoryName: "Default Name (Test)"
    };

    render() {
        const { repositoryName } = this.props;
        return (
            <div>
                <BoxWithMargin>
                    <Media>
                        <Media.Item>
                            <RepositoryCardName
                                repositoryName={repositoryName}
                            />
                        </Media.Item>

                        <RepositoryBubblesPanel
                            renderAs="figure"
                            position="right"
                        >
                            <RepositoryCardBubble
                                upText="Scrape"
                                midText={
                                    this.props.scraperStatus == "Ready"
                                        ? "Ready"
                                        : this.props.scrapePercent + "%"
                                }
                                lowText={
                                    this.props.scrapeDone +
                                    "/" +
                                    this.props.scrapeTotal
                                }
                                bubbleColor={
                                    this.scraperStatus == "Ready"
                                        ? "#f9ccac"
                                        : "#87bdd8"
                                }
                                linkTo={
                                    this.props.scraperStatus == "Ready"
                                        ? "/scrape/" + repositoryName
                                        : false
                                }
                                repositoryName={repositoryName}
                            />
                            <RepositoryCardBubble
                                upText="Parse"
                                midText={this.props.parseMid}
                                bubbleColor={
                                    this.parserStatus == "Unavailable"
                                        ? "#b7d7e8"
                                        : "#e0e2e4"
                                }
                            />
                            <RepositoryCardBubble
                                upText="Export"
                                midText={this.props.exportMid}
                                bubbleColor={
                                    this.exporterStatus == "Unavailable"
                                        ? "#cfe0e8"
                                        : "#e0e2e4"
                                }
                            />
                        </RepositoryBubblesPanel>

                        <Media.Item renderAs="figure" position="right">
                            {/* <RepoSetting repoName={repoName} /> */}
                            <RepositoryDeleteButton
                                repositoryName={repositoryName}
                            />
                        </Media.Item>
                    </Media>
                </BoxWithMargin>
            </div>
        );
    }
}
