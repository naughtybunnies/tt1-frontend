import React from "react";
import styled from "styled-components";

import { Box } from "react-bulma-components";
import DisplayPicture from "../atoms/DisplayPicture";
import SocialBar from "../molecules/SocialBar";

const ProfileCardContainer = styled(Box)`
    width: 30vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`;

export default function ProfileCard(props) {
    return (
        <ProfileCardContainer>
            <DisplayPicture image={props.image} />
            <hr />
            <b>Name</b>
            <p>{props.name || "John Doe"}</p>
            <hr />
            <b>ID</b>
            <p>{props.id || "58227xxxxx"}</p>
            <hr />
            <b>Responsibility</b>
            <p>{props.role || "something"}</p>
            <hr />
            <b>Profile</b>
            <SocialBar {...props.socialBar} />
        </ProfileCardContainer>
    );
}
