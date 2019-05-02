import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Tile, Heading, Box } from "react-bulma-components";

class Sidebar extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#f2e394", height: "100vh" }}>
                <Tile vertical size={12} kind="parent">
                    <Tile kind="child">
                        <Link to="/">
                            <Box>
                                <Heading size={6}>Repositories</Heading>
                            </Box>
                        </Link>
                    </Tile>
                </Tile>
            </div>
        );
    }
}

export default Sidebar;
