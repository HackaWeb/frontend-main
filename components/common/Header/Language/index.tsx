"use client";

import { Select } from "@/components/ui/Select";
import { SelectOption } from "@/types/selectOption.interface";
import { useState } from "react";

const selectOptions: SelectOption[] = [
    {
        title: "UA",
        value: "ua",
    },
    {
        title: "EN",
        value: "en",
    },
];

export const Language = () => {
    const [activeLanguage, setActiveLanguage] = useState<SelectOption>(
        selectOptions[0],
    );

    return (
        <Select
            activeOption={activeLanguage}
            setActiveOption={setActiveLanguage}
            options={selectOptions}
            placeholder="Select language"
            id="language"
            className="w-28"
        />
    );
};
