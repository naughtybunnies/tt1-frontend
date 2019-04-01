import React, { useState } from "react";
import axios from "axios";
import { Table } from "react-bulma-components";

const setDataIntoState = (repositoryName, setterMethod) => {
    console.log("DataTable is using reponame = ", repositoryName)
    if (repositoryName == "mock") {
        setterMethod([
            { id: "1", col1: "some val" },
            { id: "2", col1: "some val" },
            { id: "3", col1: "some val" },
            { id: "4", col1: "some val" },
            { id: "5", col1: "some val" }
        ]);
        return null;
    } else {
        axios
            .get(
                window.API_ENDPOINT +
                    "/repository/" +
                    repositoryName +
                    "/datatable/"
            )
            .then(response => {
                setterMethod(response.data);
            })
            .catch(error => {
                console.log("using mock data");

                setterMethod([
                    { id: "1", col1: "some val" },
                    { id: "2", col1: "some val" },
                    { id: "3", col1: "some val" },
                    { id: "4", col1: "some val" },
                    { id: "5", col1: "some val" }
                ]);
            });
    }
};

const createRow = (rowData, kind) => {
    let row = [];

    if (kind === "head") {
        console.log(rowData);

        row = Object.keys(rowData).map(item => {
            return <th>{item}</th>;
        });
    } else {
        row = Object.values(rowData).map(item => {
            return <td>{item}</td>;
        });
    }
    return row;
};

const createTable = responseData => {
    let head = <tr>{createRow(responseData[0], "head")}</tr>;
    let body = responseData.map(row => {
        return <tr> {createRow(row, "body")} </tr>;
    });

    return [head, body];
};

export default function DataTable(props) {
    const [dataTable, setDataTable] = useState(null);

    if (!dataTable) {
        setDataIntoState(props.repositoryName || "mock", setDataTable);
        return <div>Loading</div>;
    }

    const [head, body] = createTable(dataTable);

    return (
        <div>
            <Table>
                <thead>{head}</thead>
                <tbody>{body}</tbody>
            </Table>
        </div>
    );
}
