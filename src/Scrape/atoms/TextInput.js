import React, { Component } from "react";
import {
    Field,
    Label,
    Control,
    Input
} from "react-bulma-components/lib/components/form";

export default class TextInput extends Component {
    static defaultProps = {
        label: "undefined",
        placeholder: "undefined",
    }

    render() {
        const { label, placeholder, onChange, name, value, color} = this.props;

        return (
            <Field>
                <Label>{label}</Label>
                <Control>
                    <Input
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        name={name}
                        color={color}
                    />
                </Control>
            </Field>
        );
    }
}
