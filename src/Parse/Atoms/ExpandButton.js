import React from "react";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";

import BaseButton from "./BaseButton";

export default function ExpandButton() {
    return <BaseButton icon={faLevelDownAlt} tooltip="Expand selected node"/>;
}
