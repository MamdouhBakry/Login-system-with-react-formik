import React from "react";
import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, colors } from "./../components/Styles";
import logo from "./../assets/background.jpg"
function Dashboard() {
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
            <StyledFormArea bg={colors.dark2}>
                <StyledTitle size={65}>
                    Welcome to TTPC
                </StyledTitle>
                <StyledSubTitle size={27}>
                    Feel Free to Explore Our Page
                </StyledSubTitle>
                <ButtonGroup>
                    <StyledButton to="#">
                        Logout
                    </StyledButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>
    );
}

export default Dashboard;
