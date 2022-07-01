import { useField } from 'formik';
import {
    StyledTextInput,
    StyledLabel,
    StyledIcon,
    ErrorMsg
} from "./../components/Styles";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
export const TextInput = ({ icon, ...props }) => {
    const [show, setShow] = useState(false);
    const [field, meta] = useField(props);
    return (
        <div style={{ position: "relative" }}>
            <StyledLabel HtmlFor={props.name}>
                {props.label}
            </StyledLabel>
            {props.type !== "password" && (<StyledTextInput
                invalid={meta.touched && meta.error}
                {...field}
                {...props}
            />)}
            {props.type == "password" && <StyledTextInput
                invalid={meta.touched && meta.error}
                {...field}
                {...props}
                type={show ? 'text' : 'password'}
            />}
            <StyledIcon>
                {icon}
            </StyledIcon>
            {
                props.type == "password" &&
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show && <FiEye />}
                    {!show && <FiEyeOff />}
                </StyledIcon>
            }
            {
                meta.touched && meta.error ? (
                    <ErrorMsg>{meta.error}</ErrorMsg>
                ) : (
                    <ErrorMsg style={{ visibility: "hidden" }}>-</ErrorMsg>
                )
            }
        </div>
    )
}