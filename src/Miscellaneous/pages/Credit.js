import React from "react";
import styled from "styled-components";

import Navbar from "../../Template/Navbar";
import ProfileCard from "../organisms/ProfileCard";

const VerticalCenter = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
`;
const HorizontalCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const tonny = {
    image: require('../contents/tonny_image.jpg'),
    name : "Kriddanai Roonguthai",
    id: 5822780334,
    role: "Frontend Developer, Project Manager",
    socialBar: {
        facebook: "https://www.facebook.com/tonny6262",
        github: "https://github.com/tonny62",
        linkedin: "https://www.linkedin.com/in/kriddanairoo/"
    }
}

export default function Credit() {
    return (
        <div>
            <Navbar />
            <section className="section" style={{height: "100vh"}}>
                <VerticalCenter>
                    <HorizontalCenter>
                        <ProfileCard {...tonny}/>
                        <ProfileCard />
                    </HorizontalCenter>
                </VerticalCenter>
            </section>
        </div>
    );
}
