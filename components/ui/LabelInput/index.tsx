import { cn } from "@/helpers/cn";
import { LabelInputProps } from "./LabelInput.props";

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
            <input
                id={id}
                className={cn(
                    "mt-2 w-full p-3 text-base bg-blackOpacity rounded-md",
                    disabled && "cursor-not-allowed text-gray-400",
                )}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                name={id}
                type={type}
                disabled={disabled}
            />
        </div>
    );
};
