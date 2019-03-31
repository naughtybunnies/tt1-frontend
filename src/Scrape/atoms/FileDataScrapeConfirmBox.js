import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import { Box, Button } from "react-bulma-components";

import {
    Field,
    Label,
    Control,
    Textarea
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

export default class FileDataScrapeConfirmBox extends Component {
    handleStartScraping = () => {
        const { repositoryName } = this.props;
        axios
            .get(
                window.API_ENDPOINT +
                    "/repository/" +
                    repositoryName +
                    "/scraper/file/confirm/"
            )
            .then(
                window.location = "/"
            )
            .catch(error => {
                alert(error.data);
            });
    };

    handleDiscard = () => {
        const { handleToggleConfirmBox, repositoryName } = this.props;
        axios
            .get(
                window.API_ENDPOINT +
                    "/repository/" +
                    repositoryName +
                    "/scraper/file/discard/"
            )
            .then(
                handleToggleConfirmBox()
            )
            .catch(error => {
                alert(error.data);
            });

    }

    render() {
        const {
            showConfirmBox,
            textAreaData
        } = this.props;

        return (
            <div style={{ display: showConfirmBox ? "block" : "none" }}>
                <LoginFormBg>
                    <LoginForm>
                        <Field>
                            <Label>File preview:</Label>
                            <Control>
                                <Textarea
                                    className="has-fixed-size"
                                    rows={8}
                                    readOnly={true}
                                    value={JSON.stringify(
                                        textAreaData,
                                        null,
                                        "\t"
                                    )}
                                />
                            </Control>
                        </Field>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around"
                            }}
                        >
                            <Button
                                style={{ width: "40%" }}
                                color="link"
                                onClick={this.handleStartScraping}
                            >
                                Start Scraping
                            </Button>
                            <Button
                                style={{ width: "40%" }}
                                color="warning"
                                onClick={this.handleDiscard}
                            >
                                Restart
                            </Button>
                        </div>
                    </LoginForm>
                </LoginFormBg>
            </div>
        );
    }
}
