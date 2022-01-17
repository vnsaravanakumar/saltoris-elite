import InputIcon from '@material-tailwind/react/InputIcon';
import Input from '@material-tailwind/react/Input';
import { Controller } from "react-hook-form";
import React from "react";

export const FormInput = ({ name, label, control, validation, rules, ...rest }) => {

    rest = {
        size: "sm",
        color:"lightBlue",
        placeholder: label,
        error: validation,
        ...rest
    }
  return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field }) => ( 
                rest?.iconName ? 
                    <InputIcon
                        {...rest}
                        {...field}
                /> : <Input
                        {...rest}
                        {...field}
                    />
            )}
        />
    );
};