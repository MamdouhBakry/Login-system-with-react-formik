import React from 'react';
import Logo from './../assets/background.jpg';
import { StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyRightText } from "./../components/Styles";
// Formik
import { Formik, Form } from "formik";
import { TextInput } from "./../components/FormLib";
import * as yup from "yup";
// icons
import { FiMail, FiLock } from "react-icons/fi";
// loader
import { Audio } from 'react-loader-spinner'
function Login() {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    Member Login
                </StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={yup.object({
                        email: yup.string().email("Invalid Email Address").required("Required"),
                        password: yup.string().min(8, "Password is too short")
                            .max(30, "Password is too long")
                            .required("Required")
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="mamdouh@gmail.com"
                                icon={<FiMail />}
                            />
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />
                            <ButtonGroup>
                                <StyledFormButton type="submit">Login</StyledFormButton>
                                {
                                    isSubmitting && (
                                        <Audio
                                            height="100"
                                            width="100"
                                            color='grey'
                                            ariaLabel='loading'
                                        />)
                                }
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New Here? <TextLink to="/signup">signup</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyRightText>
                All Rights Reserved &copy;2022
            </CopyRightText>
        </div>
    )
}

export default Login