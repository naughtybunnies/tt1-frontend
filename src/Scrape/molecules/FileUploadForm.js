import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Content from "react-bulma-components/lib/components/content";
import {
    Field,
    Label,
    Control,
    Input
} from "react-bulma-components/lib/components/form";
import { Button } from "react-bulma-components";

import UploadButton from "../atoms/UploadButton";
import FileDataScrapeConfirmBox from "../atoms/FileDataScrapeConfirmBox";

const FormContainer = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
`;

export default class FileUploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: undefined,
            fileInputColor: undefined,
            fileLabel: undefined,
            showConfirmBox: false
        };
    }

    handleFileChange = event => {
        this.setState({
            fileName: event.target.value,
            fileInputColor: undefined,
            fileLabel: undefined,
            file: event.target.files[0]
        });
    };

    handleFormSubmit = event => {
        const { fileName } = this.state;
        const { repositoryName } = this.props;
        if (fileName) {
            this.setState({ fileInputColor: undefined, fileLabel: undefined });
            let formData = new FormData();
            formData.append("file", this.state.file);
            axios
                .post(
                    window.API_ENDPOINT +
                        "/repository/" +
                        repositoryName +
                        "/scraper/file/submit/",
                    formData,
                    {
                        headers: { "Content-Type": "multipart/form-data" }
                    }
                )
                .then(response => {
                    this.handleToggleConfirmBox();
                    this.setState({'textAreaData': response.data})
                })
                .catch(error => {
                    // console.log("error", error);
                    this.setState({"error": error.response.data})
                    alert(error.response.data);
                });
        } else {
            this.setState({
                fileInputColor: "danger",
                fileLabel: "Please Select Input File"
            });
        }
        event.preventDefault();
    };

    handleToggleConfirmBox = () => {
        let { showConfirmBox } = this.state;
        this.setState({ showConfirmBox: ~showConfirmBox });
    }

    render() {
        const { fileInputColor, fileLabel, showConfirmBox, textAreaData } = this.state;
        const { repositoryName } = this.props;
        return (
            <div>
                <FileDataScrapeConfirmBox
                    showConfirmBox={showConfirmBox}
                    handleToggleConfirmBox={this.handleToggleConfirmBox}
                    textAreaData={textAreaData}
                    repositoryName = { repositoryName }
                />
                <Content>
                    <h3>Scrape Using URL File</h3>
                </Content>
                <hr />
                <form onSubmit={this.handleFormSubmit}>
                    <FormContainer>
                        <Field>
                            <Label>[ 1 ] Choose the URL file</Label>
                            <Control>
                                <UploadButton
                                    onChange={this.handleFileChange}
                                    color={fileInputColor}
                                    label={fileLabel}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label>[ 2 ] Verify File Format</Label>
                            <Control>
                                <Button>Upload</Button>
                            </Control>
                        </Field>
                    </FormContainer>
                </form>
            </div>
        );
    }
}
