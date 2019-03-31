import React from "react";
import { faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons";

import BaseButton from "../Atoms/BaseButton";

export default function SuppressNodeButton(props) {
    return <BaseButton icon={faCompressArrowsAlt} tooltip="Compress selected node."/>;
}
