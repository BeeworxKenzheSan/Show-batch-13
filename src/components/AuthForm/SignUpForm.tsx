import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import { useFormik } from "formik";
import { useState } from "react";
import { validationAuthSignUp } from "../../helpers/validate";
import { FormWrapper } from "../../layouts/FormWrapper";
import { Box, styled, Typography, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

interface SignUpTypes {
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
}

export const SignUpForm = () => {
    const [checkPassword, setCheckPassword] = useState(false);
    const isLoading = false;

    const onSubmit = (values: SignUpTypes) => {
        if (values.password === values.confirmPassword) {

            setCheckPassword(false);
        } else {
            setCheckPassword(true);
        }
    };


    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit,
        validateOnChange: false,
        validationSchema: validationAuthSignUp,
    });
    return (
        <FormWrapper onSubmit={handleSubmit}>
            <h2>Регистрация</h2>

            <BoxInput>
                <Input
                    fullWidth
                    label="Почта"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </BoxInput>

            <BoxInput>
                <Input
                    fullWidth
                    label="Имя"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </BoxInput>

            <BoxInput>
                <Input
                    fullWidth
                    label="Пароль"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </BoxInput>

            <BoxInput>
                <Input
                    fullWidth
                    label="Подвердите пароль"
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                />

                {errors.confirmPassword && (
                    <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
                )}

                {checkPassword ? <ErrorMessage>Пароли не совпадают</ErrorMessage> : ""}
            </BoxInput>

            <Button type="submit">
                {isLoading ? <CircularProgress size="1.5rem" /> : "Зарегистрироваться"}
            </Button>

            <Paragraph>
                Уже зарегистрированы? <Link to={'/sign-in'}>Войти</Link>
            </Paragraph>
        </FormWrapper>
    )
}




const BoxInput = styled(Box)`
  width: 100%;
`;



const ErrorMessage = styled(Typography)(() => ({
    color: "red",
}));

const Paragraph = styled("p")`
    margin-top: -19px;
    & > span {
      color: #30723f;
    }
  `;