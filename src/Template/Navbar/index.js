import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "react-bulma-components";

export default class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar color="light">
                    <Navbar.Brand>
                        <Link to="/">
                            <Navbar.Item>
                                <b style={{ fontSize: "1.5em" }}>
                                    TT1 - Senior Project
                                </b>
                            </Navbar.Item>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Container position="end">
                            <Navbar.Item>
                                <Link to="/" style={{ color: "#4a4a4a" }}>
                                    Go Back Home
                                </Link>
                            </Navbar.Item>

                            <Navbar.Item dropdown={true} hoverable={true}>
                                <Navbar.Link>Menu</Navbar.Link>
                                <Navbar.Dropdown right={true}>
                                    <Link to="/documentation">
                                        <Navbar.Item>Documentation</Navbar.Item>
                                    </Link>
                                    <Link to="/credit">
                                        <Navbar.Item>Credits</Navbar.Item>
                                    </Link>
                                </Navbar.Dropdown>
                            </Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Navbar>
            </div>
        );
    }
}
