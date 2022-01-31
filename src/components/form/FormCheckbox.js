import Checkbox from '@material-tailwind/react/Checkbox';
import { Controller } from "react-hook-form";

export const FormCheckbox = ({ name, label, control, className, validation, rules,...rest }) => {
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
            className={className}
            render={({ field }) => ( 
                <Checkbox
                    {...field}
                    {...rest}
                    id={name}
                    checked={field.value}
                />
            )}
        />
    );
};