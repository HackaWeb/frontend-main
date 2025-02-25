"use client";

import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { getCookie } from "@/helpers/getCookie";
import { ThemeSwitchProps } from "./ThemeSwitch.props";

export const ThemeSwitch = ({ onCheckedChange }: ThemeSwitchProps) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const checkTheme = async () => {
            const theme = await getCookie("theme");
            setIsDark(theme === "dark");
        };

        checkTheme();
    }, []);

    return (
        <button
            onClick={() => {
                setIsDark(!isDark);
                onCheckedChange();
            }}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <BsMoon className="size-5 text-white" />
            ) : (
                <BsSun className="size-5 text-yellow" />
            )}
        </button>
    );
};
