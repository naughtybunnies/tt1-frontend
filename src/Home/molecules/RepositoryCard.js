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
    constructor(props) {
        super(props);
        const {
            scrapePercent,
            scrapeTotal,
            repositoryName,
            scrapeDone
        } = this.props;

        if (scrapePercent <= 99) {
            // open eventStream
            this.state = {
                myEventSource: new EventSource(
                    window.API_ENDPOINT + "/repository/stream/" + repositoryName
                ),
                scrapePercent: scrapePercent,
                scrapeTotal: scrapeTotal,
                scrapeDone: scrapeDone
            };
            this.state.myEventSource.onmessage = e => {
                const data = JSON.parse(e.data);
                const newPercent =
                    (data.bubble.scraper.scraped_file_count /
                        data.bubble.scraper.total_file_count) *
                    100;
                const newDone = data.bubble.scraper.scraped_file_count;
                this.setState({
                    scrapePercent: newPercent,
                    scrapeTotal: scrapeTotal,
                    scrapeDone: newDone
                });
            };
        } else {
            // set default data
            this.state = {
                scrapePercent: scrapePercent,
                scrapeTotal: scrapeTotal,
                scrapeDone: scrapeDone
            };
        }
    }

    static defaultProps = {
        repositoryName: "Default Name (Test)"
    };

    render() {
        const { repositoryName } = this.props;
        const { scrapePercent, scrapeDone, scrapeTotal } = this.state;
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
                                    this.props.scraperStatus === "Ready"
                                        ? "Ready"
                                        : scrapePercent + "%"
                                }
                                lowText={scrapeDone + "/" + scrapeTotal}
                                bubbleColor={
                                    this.props.scraperStatus === "Ready"
                                        ? "#f9ccac"
                                        : "#87bdd8"
                                }
                                linkTo={
                                    this.props.scraperStatus === "Ready"
                                        ? "/scrape/" + repositoryName
                                        : false
                                }
                                repositoryName={repositoryName}
                            />
                            <RepositoryCardBubble
                                upText="Parse"
                                midText={this.props.parseMid}
                                bubbleColor={
                                    this.props.parserStatus === "Ready"
                                        ? "#b7d7e8"
                                        : "#e0e2e4"
                                }
                                linkTo={
                                    this.props.parserStatus === "Ready"
                                        ? "/parse/" + repositoryName
                                        : false
                                }
                                repositoryName={repositoryName}
                            />
                            <RepositoryCardBubble
                                upText="Export"
                                midText={this.props.exportMid}
                                bubbleColor={
                                    this.props.exporterStatus === "Ready"
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
