import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

interface ButtonProps extends MuiButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, ...rest }) => {
    return (
        <StyledButton onClick={onClick} {...rest}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled(MuiButton)({
    minWidth: '408px',
    backgroundColor: '#121314',
    padding: 10,
    color: 'white',
    "&:hover": {
        backgroundColor: "#2a2b2d"
    }
});
