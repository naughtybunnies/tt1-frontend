import React, { Component } from "react";

import { Columns } from "react-bulma-components";

import Navbar from "../../Template/Navbar";
import ScrapeUsingPrimaryKeyBox from "../organisms/ScrapeUsingPrimaryKeyBox";

export default class PrimaryKeyScrape extends Component {
    render() {
        try {
            var { repositoryName } = this.props.match.params;
        } catch (err) {
            var repositoryName = "mock";
        }

        return (
            <div>
                <Navbar />
                <section className="section" style={{ padding: "0" }}>
                    {"Working on: "} <b>{repositoryName}</b>
                    <ScrapeUsingPrimaryKeyBox repositoryName={repositoryName} />
                </section>
            </div>
        );
    }
}
