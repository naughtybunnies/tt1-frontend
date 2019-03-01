import React, { Component } from "react";

import RepositoryCardDeleteIcon from "../atoms/RepositoryCardDeleteIcon";
import RepositoryDeleteConfirmBox from "../atoms/RepositoryDeleteConfirmBox";

export default class RepositoryDeleteButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayConfirmBox: "none"
        };
    }

    handleOnClick = () => {
        this.setState(prevState => {
            let tempState = prevState;
            tempState.displayConfirmBox =
                prevState.displayConfirmBox === "none" ? "block" : "none";
            return tempState;
        });
    };

    render() {
        const { repositoryName } = this.props;
        const { displayConfirmBox } = this.state;

        return (
            <div>
                <div onClick={this.handleOnClick} className="selemnium-repo-delete">
                    <RepositoryCardDeleteIcon/>    
                </div>
                <RepositoryDeleteConfirmBox repositoryName={repositoryName} displayConfirmBox={displayConfirmBox} toggler={this.handleOnClick}/>
            </div>
        );
    }
}
