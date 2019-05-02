import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import TextInput from "../atoms/TextInput";

import { Button } from "react-bulma-components";

const FormContainer = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
`;

export default class PrimaryKeyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseurl: "",
            start: "",
            end: "",
            reponame: props.repositoryName,
            errorMessage: "",
            baseurlIsDanger: false,
            rangeIsDanger: false
        };
    }

    formHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    formSubmitHandler = event => {
        if (this.state.baseurl === "") {
            this.setState({
                errorMessage: "Please enter URL.",
                baseurlIsDanger: true
            });
        } else if (this.state.start === "" || this.state.end === "") {
            this.setState({
                errorMessage: "Please enter valid range of Start and End",
                rangeIsDanger: true
            });
        } else {
            axios
                .post(window.API_ENDPOINT + "/repository/scraper/seturl/", {
                    baseurl: this.state.baseurl,
                    start: this.state.start,
                    end: this.state.end,
                    reponame: this.state.reponame
                })
                .then(response => {
                    if (response.status === 200) {
                        window.location.replace("/");
                    }
                })
                .catch(error => {
                    this.setState({
                        errorMessage: error.response.data
                    });
                });
        }

        event.preventDefault();
    };

    render() {
        const { baseurl, start, end } = this.state;
        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                    <FormContainer>
                        <TextInput
                            label="Base URL"
                            placeholder="http://www.example.com/id={}"
                            name="baseurl"
                            value={baseurl}
                            onChange={this.formHandler}
                            color={
                                this.state.baseurlIsDanger ? "danger" : "link"
                            }
                        />
                        <TextInput
                            label="Start"
                            placeholder="0"
                            name="start"
                            value={start}
                            onChange={this.formHandler}
                            color={this.state.rangeIsDanger ? "danger" : "link"}
                        />
                        <TextInput
                            label="End"
                            placeholder="17"
                            name="end"
                            value={end}
                            onChange={this.formHandler}
                            color={this.state.rangeIsDanger ? "danger" : "link"}
                        />

                        <Button color="link">Start Scraping</Button>
                        <p>{this.state.errorMessage || ""}</p>
                    </FormContainer>
                </form>
            </div>
        );
    }
}
