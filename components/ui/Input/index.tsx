import { cn } from "@/lib/utils";
import { InputProps } from "./Input.props";

export const Input = ({ className, disabled, ...props }: InputProps) => {
    return (
        <input
            className={cn(
                "mt-2 w-full p-3 text-base bg-secondary rounded-md",
                disabled && "cursor-not-allowed text-gray-400",
                className,
            )}
            {...props}
        />
    );
};
