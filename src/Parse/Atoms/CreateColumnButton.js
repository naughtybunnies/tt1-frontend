import React from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import BaseButton from "../Atoms/BaseButton";

export default function CreateColumn(props) {
    return <BaseButton icon={faExternalLinkAlt} tooltip="Create new column from selected node"/>;
}
