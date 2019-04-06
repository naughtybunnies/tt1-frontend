import React, { Component } from "react";
import Content from "react-bulma-components/lib/components/content";

export default class RepositoryCardName extends Component {
    render() {
        const { repositoryName } = this.props;

        return (
            <Content>
                <h3>{repositoryName}</h3>
                <dl>
                    <dd>Created Date : Should we have this feature?</dd>
                </dl>
            </Content>
        );
    }
}
