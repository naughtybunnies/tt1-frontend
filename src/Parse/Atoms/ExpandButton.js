import React from "react";
import axios from "axios";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";

import BaseButton from "./BaseButton";

const handleExpand = (targetNode, repositoryName) => {
    console.log("selected", targetNode);
    axios
        .post(
            window.API_ENDPOINT +
                "/repository/" +
                repositoryName +
                "/graph/expand/",
            { node_id: targetNode }
        )
        .then(response => {
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
};

export default function ExpandButton(props) {
    return (
        <BaseButton
            icon={faLevelDownAlt}
            tooltip="Expand selected node"
            onClick={props.targetNode ? () => handleExpand(props.targetNode, props.repositoryName) : () => {alert("no selected node found")}}
            isDisabled={props.targetNode ? false : true}
        />
    );
}
