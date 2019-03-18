import React, { Component } from "react";

import { Columns } from "react-bulma-components";

import Sidebar from "../../Template/Sidebar";
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
                <section className="section" style={{ padding: "0" }}>
                    <Columns>
                        <Columns.Column size={3}>
                            <Sidebar />
                        </Columns.Column>

                        <Columns.Column>
                            {"Working on: "} <b>{repositoryName}</b>
                            <ScrapeMethodMenuBox
                                repositoryName={repositoryName}
                            />
                        </Columns.Column>
                    </Columns>
                </section>
            </div>
        );
    }
}
