import React from 'react';
import Logo from './../assets/background.jpg';
import { StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyRightText } from "./../components/Styles";
// Formik
import { Formik, Form } from "formik";
import { TextInput } from "./../components/FormLib";
import * as yup from "yup";
// icons
import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";
// loader
import { Audio } from 'react-loader-spinner'
function Signup() {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    Member Signup
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
                            .required("Required"),
                        name: yup.string().required("Required"),
                        dateOfBirth: yup.date().required("Required"),
                        repeatPassword: yup.string().required("Required").oneOf([yup.ref("password")], "Password must match"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <TextInput
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="Mamdouh Mahmoud"
                                icon={<FiUser />}
                            />
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="mamdouh@gmail.com"
                                icon={<FiMail />}
                            />
                            <TextInput
                                name="dateOfBirth"
                                type="date"
                                label="Date Of Birth"
                                icon={<FiCalendar />}
                            />
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />
                            <TextInput
                                name="resetPassword"
                                type="password"
                                label="Rest Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />
                            <ButtonGroup>
                                <StyledFormButton type="submit">Signup</StyledFormButton>
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
                    Already have an acount? <TextLink to="/signin">login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyRightText>
                All Rights Reserved &copy;2022
            </CopyRightText>
        </div>
    )
}

export default Signup