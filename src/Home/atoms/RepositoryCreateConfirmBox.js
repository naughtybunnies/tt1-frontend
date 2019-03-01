import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import {
    Field,
    Label,
    Control,
    Input
} from "react-bulma-components/lib/components/form";
import Box from "react-bulma-components/lib/components/box";
import Button from "react-bulma-components/lib/components/button";

const LoginForm = styled(Box)`
    display: block;
    height: 400px;
    background-color: azure;
    width: 50vw;
    margin: 10% auto;
`;

const LoginForm_bg = styled.div`
    display: block;
    position: absolute;
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`;
export default class RepositoryCreateConfirmBox extends Component {
    constructor(props) {
        super(props);
        this.state = { formValue: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const formValue = event.target.value.trim();
        this.setState(prevState => ({
            formValue: formValue,
            formIsDanger: false
        }));
    }

    confirmCreate = () => {
        axios
            .post("http://192.168.43.91:5000/repository/", {
                name: this.state.formValue
            })
            .then(response => {
                switch(response.status){
                    case 203:
                        window.location.reload()
                        break
                    default:
                        break
                }
            })
            .catch(error => {
                this.setState((prevState) => {
                    let tempState = prevState
                    tempState.errorMessage = error.response.data
                    tempState.formIsDanger = true
                    return tempState
                }
                )
            });
    };

    render() {
        const { repositoryName, displayConfirmBox, toggler } = this.props;
        return (
            <div style={{ display: displayConfirmBox }}>
                <LoginForm_bg>
                    <LoginForm>
                        <Field>
                            <Label>Create New Repository</Label>
                            <Control>
                                <Input
                                    placeholder={
                                        "Type in your repository name: " +
                                        repositoryName
                                    }
                                    onChange={this.handleChange}
                                    value={this.state.formValue}
                                    className="selenium-reponame-input"
                                    color={this.state.formIsDanger ? 'danger' : 'link'}
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
                                    onClick={this.confirmCreate}
                                    className="Submit selenium-submit-button"
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
                        <p>{this.state.errorMessage ||  ""}</p>
                    </LoginForm>
                </LoginForm_bg>
            </div>
        );
    }
}
