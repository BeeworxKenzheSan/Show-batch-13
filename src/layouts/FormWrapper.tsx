import { FC, ReactNode } from 'react';
import { styled } from "@mui/material";

interface FormWrapperProps {
    children: ReactNode;
    onSubmit: () => void
}

export const FormWrapper: FC<FormWrapperProps> = ({ children, onSubmit }) => {
    return <Wrapper><FormBlock onSubmit={onSubmit}>{children}</FormBlock ></Wrapper>;
};

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 120px;
`;

const FormBlock = styled('form')`
    width: 411px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 39px;
`