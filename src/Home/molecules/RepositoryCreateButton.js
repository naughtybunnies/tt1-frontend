import React, { Component } from "react";

import RepositoryCreateBubble from "../atoms/RepositoryCreateBubble";
import RepositoryCreateConfirmBox from "../atoms/RepositoryCreateConfirmBox";

export default class RepositoryCreateButton extends Component {
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
        const { displayConfirmBox } = this.state;

        return (
            <div>
                <div onClick={this.handleOnClick}>
                    <RepositoryCreateBubble className="CreateRepoButton"/>
                </div>
                <RepositoryCreateConfirmBox
                    displayConfirmBox={displayConfirmBox}
                    toggler={this.handleOnClick}
                />
            </div>
        );
    }
}
