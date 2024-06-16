import { InputAdornment, TextField, TextFieldProps, styled } from '@mui/material';
import { forwardRef, Ref } from 'react';
import { ReactElement } from 'react';

interface InputProps extends Omit<TextFieldProps, 'variant'> {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: ReactElement;
}

export const Input = forwardRef(
    (props: InputProps, ref: Ref<HTMLInputElement>) => {
        const { onChange, value, icon, ...rest } = props;
        return (
            <StyledTextField
                variant="outlined"
                inputRef={ref}
                value={value}
                onChange={onChange}
                InputProps={{
                    startAdornment: icon && (
                        <InputAdornment position="start">{icon}</InputAdornment>
                    ),
                }}
                {...rest}
            />
        );
    }
);

const StyledTextField = styled(TextField)(() => ({
    '& .MuiInputBase-input': {
        padding: '12px 16px',
    },
}));

