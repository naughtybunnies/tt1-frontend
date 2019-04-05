import React from "react";
import styled from "styled-components";
import axios from "axios";

import OptionCard from "../Molecules/OptionCard";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const MenuArea = styled.div`
    width: 50vw;
`;

const handleExportJSON = repositoryName => {
    // axios
    //     .get(
    //         window.API_ENDPOINT +
    //             "/repository/" +
    //             repositoryName +
    //             "/exporter/json"
    //     )
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(error => {
    //         console.log("error", error);
    //     });

    window.open(window.API_ENDPOINT +
                    "/repository/" +
                    repositoryName +
                    "/exporter/json", "_blank")
};

export default function ExportMenuBox(props) {
    const cards = [
        {
            title: "Export into JSON file",
            subtitle:
                "Suitable for general use of scraped data eg: cross tabulation",
            img: <img src={require("../Lib/json-icon.png")} />,
            onClick: (() => handleExportJSON(props.repositoryName))
        },
        {
            title: "Export into Linked Data",
            subtitle: "Work in progress",
            color: "#9a9a9a",
            img: <img src={require("../Lib/link-icon.png")} />
        }
    ];
    const RenderedCard = cards.map(card => <OptionCard {...card} />);

    return (
        <FlexContainer>
            <MenuArea>{RenderedCard}</MenuArea>
        </FlexContainer>
    );
}
