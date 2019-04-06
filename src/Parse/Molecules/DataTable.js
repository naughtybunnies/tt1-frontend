import React, { useState } from "react";
import axios from "axios";
import { Table } from "react-bulma-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const setDataIntoState = (repositoryName, setterMethod) => {
    console.log("DataTable is using reponame = ", repositoryName);
    if (repositoryName === "mock") {
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

const handleDeleteColumn = (columnName, repositoryName) => {
    console.log(columnName);
    if (
        window.confirm(
            String(
                "Are you sure you want to delete column [ " +
                    columnName +
                    " ] ?"
            )
        )
    ) {
        axios
            .post(
                window.API_ENDPOINT +
                    "/repository/" +
                    repositoryName +
                    "/datatable/delete/",
                { column_name: columnName }
            )
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    }
};

const createRow = (rowData, kind, repositoryName) => {
    let row = [];

    if (kind === "head") {
        console.log(rowData);

        row = Object.keys(rowData).map(item => {
            return (
                <th>
                    <span
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}
                    >
                        <span>{item}</span>

                        {item !== "id" && (
                            <span>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    style={{ cursor: "pointer" }}
                                    onClick={event =>
                                        handleDeleteColumn(item, repositoryName)
                                    }
                                />
                            </span>
                        )}
                    </span>
                </th>
            );
        });
    } else {
        row = Object.values(rowData).map(item => {
            return <td>{item}</td>;
        });
    }
    return row;
};

const createTable = (responseData, repositoryName) => {
    let head = <tr>{createRow(responseData[0], "head", repositoryName)}</tr>;
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

    const [head, body] = createTable(dataTable, props.repositoryName);

    return (
        <div>
            <Table>
                <thead>{head}</thead>
                <tbody>{body}</tbody>
            </Table>
        </div>
    );
}
