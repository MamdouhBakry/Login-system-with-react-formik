import React from "react";
import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "./../components/Styles";
import logo from "./../assets/background.jpg"
function Home() {
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <Avatar image={logo} />
            </div>
            <StyledTitle size={65}>
                Welcome to TTPC
            </StyledTitle>
            <StyledSubTitle size={27}>
                Feel Free to Explore Our Page
            </StyledSubTitle>
            <ButtonGroup>
                <StyledButton to="/signin">
                    Login
                </StyledButton>
                <StyledButton to="/signup">
                    Signup
                </StyledButton>
            </ButtonGroup>
        </div>
    );
}

export default Home;
