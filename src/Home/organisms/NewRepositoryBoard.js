import React, { useState } from "react";

import axios from "axios";
import RepositoryCard from "../molecules/RepositoryCard";

const reshapeData = data => {
    return {
        repositoryName: data.name,
        scraperStatus: data.bubble.scraper.state,
        parserStatus: data.bubble.parser.state,
        exporterStatus: data.bubble.exporter.state,
        scrapePercent:
            String.slice(String(data.bubble.scraper.scraped_file_count * 100/
                data.bubble.scraper.total_file_count),0, 4) ,
        scrapeTotal: data.bubble.scraper.total_file_count,
        scrapeDone: data.bubble.scraper.scraped_file_count,
        parseMid: data.bubble.parser.state,
        parseLower: data.bubble.parser.state,
        exportMid: data.bubble.exporter.state,
        exportLower: data.bubble.exporter.state
    };
};

const getCards = stateSetter => {
    axios
        .get(window.API_ENDPOINT + "/getstatus")
        .then(response => {
            stateSetter(response.data.map(item => reshapeData(item)));
        })
        .catch(error => {
            axios.get("http://localhost:3001/getstatus").then(response => {
                console.log("using mock data");
                stateSetter(response.data.map(item => reshapeData(item)));
            });
        });
};

export default function NewRepositoryBoard(props) {
    const [cards, setCards] = useState(null);
    if (!cards) {
        getCards(setCards);
        return <p>Loading</p>;
    }

    console.log("state", cards);

    const RepositoryCards = cards.map(card => <RepositoryCard {...card} />);

    return RepositoryCards;
}
