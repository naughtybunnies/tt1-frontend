import React from "react";
import axios from 'axios'
import { faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons";

import BaseButton from "../Atoms/BaseButton";

const handleCompress = (targetNode, repositoryName) => {
    console.log("selected", targetNode);
    axios
        .post(
            window.API_ENDPOINT +
                "/repository/" +
                repositoryName +
                "/graph/delete/",
            { node_id: targetNode }
        )
        .then(response => {
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
};

export default function SuppressNodeButton(props) {
    return (
        <BaseButton
            icon={faCompressArrowsAlt}
            tooltip="Compress selected node."
            onClick={props.targetNode ? () => handleCompress(props.targetNode, props.repositoryName) : () => {alert("no selected node found")}}
            isDisabled={props.targetNode ? false : true}
        />
    );
}
