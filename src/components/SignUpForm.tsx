import styled from "@emotion/styled";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

export const SignUpForm = () => {
    return (
        <Wrapper>
            <FormBlock>
                <h2>Регистрация</h2>
                <Input fullWidth label="Email" type="email" />
                <Input fullWidth label="Name" type="text" />
                <Input fullWidth label="Password" type="password" />
                <Input fullWidth label="Confirm Password" type="password" />
                <Button>Зарегистрироваться</Button>
                <Paragraph>Уже зарегистрированы? <Span>Войти</Span></Paragraph>
            </FormBlock>
        </Wrapper>
    )
}


const FormBlock = styled('form')`
    width: 411px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 39px;
`

const Paragraph = styled('p')`
    margin-top: 19px;

`

const Span = styled('span')`
    color: #30723f
`

const Wrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
`