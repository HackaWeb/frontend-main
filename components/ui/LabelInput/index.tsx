import { cn } from "@/helpers/cn";
import { LabelInputProps } from "./LabelInput.props";
import { Input } from "../Input";

export const LabelInput = ({
    className,
    labelTitle,
    placeholder,
    id,
    value,
    onChange,
    type = "text",
    disabled = false,
}: LabelInputProps) => {
    return (
        <div className={className}>
            <label htmlFor={id} className="text-gray">
                {labelTitle}
            </label>
            <Input
                placeholder={placeholder}
                id={id}
                value={value}
                onChange={onChange}
                type={type}
                disabled={disabled}
            />
        </div>
    );
};
