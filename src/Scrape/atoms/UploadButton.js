import React, { Component } from "react";
import { InputFile } from "react-bulma-components/lib/components/form";

export default class UploadButton extends Component {
    render() {
        return <InputFile {...this.props} name="file"/>;
    }
}
