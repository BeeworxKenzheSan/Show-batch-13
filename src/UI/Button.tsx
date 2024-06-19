import React from 'react';
import { CircularProgress, Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

interface ButtonProps extends MuiButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean,
    loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, loading, ...rest }) => {
    return (
        <StyledButton disabled={disabled || loading} onClick={onClick} {...rest}>
            {loading ? <CircularProgress sx={{ color: "white" }} /> : children}
        </StyledButton>
    );
}

const StyledButton = styled(MuiButton)({
    minWidth: '408px',
    backgroundColor: '#121314',
    padding: 10,
    color: 'white',

    "&:hover": {
        backgroundColor: "#2a2b2d",
    },
    "&:disabled": {
        backgroundColor: "#808285",
    },
});
