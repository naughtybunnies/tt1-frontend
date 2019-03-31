import React, { Component } from "react";
import RepositoryCard from "../molecules/RepositoryCard";
import axios from "axios";

var mockResponseFromAPI = [
    {
        bubble: {
            exporter: {
                state: "Unavailable"
            },
            parser: {
                state: "Unavailable"
            },
            scraper: {
                scraped_file_count: 8,
                state: "Ready",
                total_file_count: 8
            }
        },
        id: "9c9f7129-7db6-44ff-a3bd-84e04b81476c",
        name: "Mock"
    }
];

const reshapeAPI = APIResponse => {
    let result = {
        repositoryName: APIResponse.name,
        scraperStatus: APIResponse.bubble.scraper.state,
        parserStatus: APIResponse.bubble.parser.state,
        exporterStatus: APIResponse.bubble.exporter.state,
        scrapePercent:
            (APIResponse.bubble.scraper.scraped_file_count /
                APIResponse.bubble.scraper.total_file_count) *
            100,
        scrapeTotal: APIResponse.bubble.scraper.total_file_count,
        scrapeDone: APIResponse.bubble.scraper.scraped_file_count,
        parseMid: APIResponse.bubble.parser.state,
        parseLower: APIResponse.bubble.parser.state,
        exportMid: APIResponse.bubble.exporter.state,
        exportLower: APIResponse.bubble.exporter.state
    };
    return result;
};

export default class RepositoryBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { responseFromAPI: mockResponseFromAPI };
        this.getRepositoriesStatus();
    }

    getRepositoriesStatus = () => {
        axios
            .get(window.API_ENDPOINT + "/getstatus")
            .then(response => {
                this.setState({
                    responseFromAPI: response.data
                })
            })
            .catch(error => {
                console.log("error" + error);
            });
    };

    render() {
        const { responseFromAPI } = this.state;
        return (
            <div>
                {responseFromAPI.map((item, i) => {
                    let reshapedObject = reshapeAPI(item);

                    return <RepositoryCard {...reshapedObject} />;
                })}
            </div>
        );
    }
}
