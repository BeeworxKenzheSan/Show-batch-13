import { Input } from "../../UI/Input";
import { useFormik } from "formik";
import { Button } from "../../UI/Button";
import { FormWrapper } from "../../layouts/FormWrapper";
import { validationAithSignIn } from "../../helpers/validate";

export const SignInForm = () => {
    const submitHandler = () => {
        // email: values.email,
        // password: values.password,
    };

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: submitHandler,
        validateOnChange: false,
        validationSchema: validationAithSignIn,
    });

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <h2>Вход</h2>
            <Input
                error={Boolean(errors?.email)}
                helperText={errors?.email}
                fullWidth
                label="Почта"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <Input
                error={Boolean(errors?.password)}
                helperText={errors?.password}
                fullWidth
                label="Пароль"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />

            <Button type="submit">
                Войти
            </Button>
        </FormWrapper>
    );
};