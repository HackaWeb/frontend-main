import { ChangeEvent } from "react";

export interface LabelInputProps {
    className?: string;
    labelTitle: string;
    placeholder: string;
    id: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
