import React, { Component, createRef } from "react";
import { DataSet, Network } from "vis";

import Popup from "./SimplePopup";
import tooltipStyle from "./tooltip.css";

export default class MyNetwork extends Component {
    constructor(props) {
        super(props);
        this.myNetworkRef = createRef();
        this.network = {};

        if (!props.data) {
            // mock
            let nodes = new DataSet([
                { id: 1, label: "Node 1 - mock", title: "Node data: i am node 1" },
                { id: 2, label: "Node 2", title: "i am node 2" },
                { id: 3, label: "Node 3", title: "i am node 3" },
                { id: 4, label: "Node 4", title: "i am node 4" },
                { id: 5, label: "Node 5", title: "i am node 5" }
            ]);
            let edges = new DataSet([
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 4 },
                { from: 2, to: 5 }
            ]);
            this.options = {
                nodes: {
                    shape: "circle"
                },
                layout: {
                    hierarchical: {
                        enabled: true,
                        direction: "LR",
                        sortMethod: "directed"
                    }
                },
                interaction: {
                    hover: true
                }
            };

            this.data = {
                nodes: nodes,
                edges: edges
            };
        } else {
            let nodes = new DataSet(props.nodes);
            let edges = new DataSet(props.edges);
            this.option = new DataSet(props.option);
            this.data = { nodes: nodes, edges: edges };
        }
        this.state = {
            popupState: {
                x: 0,
                y: 0,
                visibility: false
            }
        };
    }

    componentDidMount() {
        this.network = new Network(
            this.myNetworkRef.current,
            this.data,
            this.options
        );
        
        this.network.on("showPopup", event => {
            console.log("show popup")
            const nodeId = event;
            const nodeData = this.data.nodes.get([nodeId])[0];

            let nodePosition = this.network.getPositions([event])[nodeId];
            const visBox = this.network.getBoundingBox(nodeId);

            nodePosition.x = nodePosition.x + (visBox.right - visBox.left) + 10; // move popup from center to the right

            let posDOM = this.network.canvasToDOM(nodePosition);

            this.setState({
                popupState: {
                    top: posDOM.y,
                    left: posDOM.x,
                    visibility: true,
                    content: nodeData.title
                }
            });
        });

        this.network.on("hidePopup", event => {
            this.setState({
                popupState: {
                    visibility: false
                }
            });
        });
    }

    render() {
        const { popupState } = this.state;
        return (
            <div style={{ height: "100%" }}>
                <Popup {...popupState}></Popup>
                <div ref={this.myNetworkRef} style={{ height: "100%" }}>
                    Network Visualization
                </div>
            </div>
        );
    }
}
