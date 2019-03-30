import React, { Component, createRef } from "react";
import { DataSet, Network } from "vis";
import axios from "axios";

import Popup from "./SimplePopup";

export default class VisNetwork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
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
            }
        };
        this.network = {};
        this.networkRef = createRef();
    }

    setGraph = repositoryName => {
        const graphUrl =
            window.API_ENDPOINT + "/repository/" + repositoryName + "/graph/";
        if (repositoryName !== "mock") {
            axios.get(graphUrl).then(response => {
                // set graph from real data
                console.log("using real graph");
                this.setState({
                    graph: {
                        nodes: new DataSet(response.data.nodes),
                        edges: new DataSet(response.data.edges)
                    }
                });
            });
        } else {
            axios
                .get("http://localhost:3001/graph")
                .then(response => {
                    // set graph from mock data as fallback
                    console.log("using mock graph");
                    this.setState({
                        graph: {
                            nodes: new DataSet(response.data.nodes),
                            edges: new DataSet(response.data.edges)
                        }
                    });
                })
                .catch(error => {
                    console.log("mock fallback error ", error);
                });
        }
    };

    componentDidMount() {
        const repositoryName = this.props.repositoryName || "mock";
        this.setGraph(repositoryName); // set graph into state
    }

    renderGraphObject(){
        this.network = new Network(
            this.networkRef.current,
            this.state.graph,
            this.state.options
        );

        this.network.on("showPopup", event => {
            console.log('showing popup', event)
            const nodeId = event;
            const nodeData = this.state.graph.nodes.get([nodeId])[0];

            let nodePosition = this.network.getPositions([nodeId])[nodeId];
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
        if(this.state.graph){
            this.renderGraphObject();
        }

        const { popupState } = this.state;
        return (
            <div>
                <Popup {...popupState}></Popup>
                <div ref={this.networkRef}> Graph is loading </div>
            </div>
        );
    }
}
