import React from "react";
import axios from "axios";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import BaseButton from "../Atoms/BaseButton";

const handleAddColumn = (targetNode, repositoryName) => {
    console.log("adding", targetNode);
    const column_name = prompt("Please input column name");
    if(column_name){
        axios
            .post(
                window.API_ENDPOINT +
                    "/repository/" +
                    repositoryName +
                    "/datatable/add/",
                { node_id: targetNode, column_name: column_name }
            )
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    }
};

export default function CreateColumn(props) {
    return (
        <BaseButton
            icon={faExternalLinkAlt}
            tooltip="Create new column from selected node"
            onClick={
                props.targetNode
                    ? () =>
                          handleAddColumn(
                              props.targetNode,
                              props.repositoryName
                          )
                    : () => {
                          alert("no selected node found");
                      }
            }
            isDisabled={props.targetNode ? false : true}
        />
    );
}
