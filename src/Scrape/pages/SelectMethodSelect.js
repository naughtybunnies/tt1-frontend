import React, { Component } from "react";

import Navbar from "../../Template/Navbar";
import ScrapeMethodMenuBox from "../organisms/ScrapeMethodMenuBox";

export default class ScrapeMethodSelect extends Component {
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
                    <ScrapeMethodMenuBox repositoryName={repositoryName} />
                </section>
            </div>
        );
    }
}
