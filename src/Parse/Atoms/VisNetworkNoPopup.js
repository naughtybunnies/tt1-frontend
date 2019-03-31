import React, { Component, createRef } from "react";
import { DataSet, Network } from "vis";
import axios from "axios";

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
            },
            rendered: false,
            selectedNode: null
        };
        this.network = {};
        this.networkRef = createRef();
    }

    setGraph = repositoryName => {
        const graphUrl =
            window.API_ENDPOINT + "/repository/" + repositoryName + "/graph/";
        // console.log("RepositoryName", repositoryName)
        if (repositoryName !== "mock") {
            axios.get(graphUrl).then(response => {
                // set graph from real data
                // console.log("using real graph");
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
                    // console.log("using mock graph");
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

    renderGraphObject() {
        this.network = new Network(
            this.networkRef.current,
            this.state.graph,
            this.state.options
        );

        this.network.on("hoverNode", event => {
            let nodeId = event.node;
            let nodeData = this.state.graph.nodes.get(nodeId);
            this.props.setSelectedNode({ nodeid: nodeId, nodeData: nodeData });
        });

        this.network.on("blurNode", event => {
            // console.log("hide popup")
            if (this.state.selectedNode) {
                this.props.setSelectedNode(this.state.selectedNode);
            } else {
                this.props.setSelectedNode(null);
            }
        });

        this.network.on("selectNode", event => {
            let nodeId = event.nodes[0]
            let selectedNodeData = this.state.graph.nodes.get(nodeId);

            this.props.setSelectedNode({
                nodeData: selectedNodeData,
                nodeid: nodeId
            });
            this.setState({
                selectedNode: {
                    nodeData: selectedNodeData,
                    nodeid: nodeId
                }
            });
        });
    }

    render() {
        if (this.state.graph && !this.state.rendered) {
            // set option only once
            this.renderGraphObject();
            this.setState({ rendered: true });
        }

        const { popupState } = this.state;
        return (
            <div style={{ height: "100%" }}>
                <div ref={this.networkRef} style={{ height: "100%" }}>
                    {" "}
                    Graph is loading{" "}
                </div>
            </div>
        );
    }
}
