import { LabelInputProps } from "./LabelInput.props";

export const LabelInput = ({ className, labelTitle, placeholder, id, value, onChange }: LabelInputProps) => {
    return (
        <div className={className}>
            <label htmlFor={id} className="text-gray">
                {labelTitle}
            </label>
            <input
                id={id}
                className="mt-2 w-full p-3 text-base bg-blackOpacity rounded-md"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};
