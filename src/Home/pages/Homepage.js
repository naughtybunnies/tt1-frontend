import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "../../Template/Navbar";

import RepositoryBoard from "../organisms/NewRepositoryBoard";
import RepositoryCreateButton from "../molecules/RepositoryCreateButton";

const AddButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section className="section" style={{ padding: "0" }}>
                    <RepositoryBoard />
                    <AddButtonContainer>
                        <RepositoryCreateButton />
                    </AddButtonContainer>
                </section>
            </div>
        );
    }
}

export default Homepage;
