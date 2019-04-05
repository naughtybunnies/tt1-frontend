import React, { Component } from "react";

import Navbar from "../../Template/Navbar";
import ScrapeUsingFileBox from "../organisms/ScrapeUsingFileBox";

export default class FileScrape extends Component {
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
                    <ScrapeUsingFileBox repositoryName={repositoryName} />
                </section>
            </div>
        );
    }
}
