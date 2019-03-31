import React from "react";
import SimplePopup from "../Atoms/SimplePopup";

import {
    Field,
    Label,
    Control,
    Textarea
} from "react-bulma-components/lib/components/form";
import MenuBar from "./MenuBar";
import ExpandButton from "../Atoms/ExpandButton";
import NewMenuBar from "./NewMenuBar";

export default function ControlArea(props) {

    return (
        <div style={{"overflow": "auto"}}>
            <Field>
                <Label>Node Information</Label>
                <hr />
                <Label>
                    Selecting:{" "}
                    {props.selectedNode
                        ? props.selectedNode.nodeData.label
                        : "none"}
                </Label>
                <Control>
                    <Textarea
                        className="has-fixed-size"
                        rows={props.fullscreenVisualizer ? 18 : 8}
                        readOnly={true}
                        value={
                            props.selectedNode
                                ? props.selectedNode.nodeData.title
                                : ""
                        }
                        placeholder="none"
                    />
                </Control>
            </Field>
            <NewMenuBar
                selectedNodeId={
                    props.selectedNode
                        ? props.selectedNode.nodeData.id
                        : null
                }
                repositoryName={props.repositoryName}
                setFullscreenVisualizer={props.setFullscreenVisualizer}
            />
        </div>
    );
}
