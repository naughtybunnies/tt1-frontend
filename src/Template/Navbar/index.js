import React, { Component } from "react";

import { Navbar } from "react-bulma-components";

export default class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar color="light">
                    <Navbar.Brand>
                        <Navbar.Item renderAs="a" href="#">
                            <b style={{ fontSize: "1.5em" }}>
                                TT1 - Senior Project
                            </b>
                        </Navbar.Item>
                    </Navbar.Brand>
                    <Navbar.Menu >
                        <Navbar.Container position="end">
                            <Navbar.Item dropdown={true} hoverable={true}>
                                <Navbar.Link>Menu</Navbar.Link>
                                <Navbar.Dropdown right={true}>
                                    <Navbar.Item>
                                        Frequently Asked Question (FAQ)
                                    </Navbar.Item>
                                    <Navbar.Item>Credits</Navbar.Item>
                                </Navbar.Dropdown>
                            </Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Navbar>
            </div>
        );
    }
}
