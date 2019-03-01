import React, { Component } from "react";

import Columns from "react-bulma-components/lib/components/columns";

import Sidebar from "../../Template/Sidebar";
import ScrapeUsingPrimaryKeyBox from "../organisms/ScrapeUsingPrimaryKeyBox";

export default class PrimaryKeyScrape extends Component {
    render() {
        const { repositoryName } = this.props.match.params

        return (
            <div>
                <section className="section" style={{ padding: "0" }}>
                    <Columns>
                        <Columns.Column size={3}>
                            <Sidebar />
                        </Columns.Column>

                        <Columns.Column>
                        {"Working on: "} <b>{repositoryName}</b>
                            <ScrapeUsingPrimaryKeyBox repositoryName={repositoryName} />
                        </Columns.Column>
                    </Columns>
                </section>
            </div>
        );
    }
}
