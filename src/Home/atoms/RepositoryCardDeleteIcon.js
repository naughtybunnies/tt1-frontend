import React, { Component } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const DeleteIcon = styled(FontAwesomeIcon)`
    margin: 3px 3px 3px 3px;
    cursor: pointer;
`;

export default class RepoDeleteIcon extends Component {
    render() {
        return (
            <DeleteIcon icon={faTrashAlt} />
        );
    }
}
