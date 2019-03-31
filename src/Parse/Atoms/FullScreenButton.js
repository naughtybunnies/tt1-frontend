import React from "react";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

import BaseButton from "../Atoms/BaseButton";

export default function FullScreenButton(props) {
    return <BaseButton icon={faExpandArrowsAlt} onClick={props.onClick} tooltip="Toggle fullscreen visualizer"/>;
}
