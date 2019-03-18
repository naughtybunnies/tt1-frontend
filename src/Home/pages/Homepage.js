import React, { Component } from "react";
import styled from "styled-components";

import { Columns } from "react-bulma-components";

import Sidebar from "../../Template/Sidebar";
import RepositoryBoard from "../organisms/RepositoryBoard";
import RepositoryCreateButton from "../molecules/RepositoryCreateButton";

const AddButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

class Homepage extends Component {
    render() {
        return (
            <div>
                <section className="section" style={{ padding: "0" }}>
                    <Columns>
                        <Columns.Column size={3}>
                            <Sidebar />
                        </Columns.Column>

                        <Columns.Column>
                            <RepositoryBoard />
                            <AddButtonContainer>
                                <RepositoryCreateButton />
                            </AddButtonContainer>
                        </Columns.Column>
                    </Columns>
                </section>
            </div>
        );
    }
}

export default Homepage;
