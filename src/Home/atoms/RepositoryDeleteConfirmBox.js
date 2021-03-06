import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import { Box, Button } from "react-bulma-components";

import {
    Field,
    Label,
    Control,
    Input
} from "react-bulma-components/lib/components/form";

const LoginForm = styled(Box)`
    display: block;
    height: 400px;
    background-color: azure;
    width: 50vw;
    margin: 10% auto;
`;

const LoginFormBg = styled.div`
    display: block;
    position: absolute;
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`;
export default class RepositoryDeleteConfirmBox extends Component {
    constructor(props) {
        super(props);
        this.state = { formValue: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const formValue = event.target.value;
        this.setState(prevState => ({
            formValue: formValue,
            formIsDanger: false
        }));
    }

    confirmDelete = () => {
        const { repositoryName } = this.props;
        const { formValue } = this.state;
        let tempState = this.state;

        if (repositoryName === formValue) {
            tempState.formIsDanger = false;
            axios
                .post(window.API_ENDPOINT + "/repository/delete/", {
                    name: repositoryName
                })
                .then(response => {
                    window.location.reload();
                });
        } else {
            tempState.formIsDanger = true;
            tempState.errorMessage = "Invalid repository name, try again.";
        }
        this.setState(prevState => tempState);
    };

    render() {
        const { repositoryName, displayConfirmBox, toggler } = this.props;
        return (
            <div style={{ display: displayConfirmBox }}>
                <LoginFormBg>
                    <LoginForm>
                        <Field>
                            <Label>
                                Are you sure you want to delete [ { repositoryName || " " } ] ?
                            </Label>
                            <Control>
                                <Input
                                    placeholder={
                                        "Type in your repository name: " +
                                        repositoryName
                                    }
                                    onChange={this.handleChange}
                                    value={this.state.formValue}
                                    color={
                                        this.state.formIsDanger
                                            ? "danger"
                                            : "link"
                                    }
                                    className="selemnium-delete-input"
                                />
                            </Control>
                        </Field>
                        <br />
                        <Field kind="group">
                            <Control>
                                <Button
                                    type="primary"
                                    color="link"
                                    outlined={true}
                                    onClick={this.confirmDelete}
                                    className="selemnium-delete-confirm"
                                >
                                    Submit
                                </Button>
                            </Control>
                            <Control>
                                <Button
                                    type="warning"
                                    color="danger"
                                    outlined={true}
                                    onClick={toggler}
                                >
                                    Cancel
                                </Button>
                            </Control>
                        </Field>
                        <p>{this.state.errorMessage || ""}</p>
                    </LoginForm>
                </LoginFormBg>
            </div>
        );
    }
}
