"use client";

import { BsSun, BsMoon } from "react-icons/bs";
import { setCookie } from "@/helpers/setCookie";
import { useRouter } from "next/navigation";
import { cn } from "@/helpers/cn";
import { ThemeSwitchProps } from "./ThemeSwitch.props";

export const ThemeSwitch = ({ theme }: ThemeSwitchProps) => {
    const router = useRouter();

    const isDarkTheme = async () => {
        return theme === "dark";
    };

    const handleThemeSwitch = async () => {
        const isDark = await isDarkTheme();
        setCookie("theme", !isDark ? "dark" : "light");
        router.refresh();
    };

    return (
        <div
            onClick={() => {
                handleThemeSwitch();
            }}
            className={cn(
                "cursor-pointer w-12 h-6 rounded-full relative transition-colors duration-200",
                theme === "dark" ? "bg-gray-500" : "bg-white",
            )}
        >
            <div
                className={`
                    absolute top-0.5 left-0.5 w-5 h-5 rounded-full 
                    flex items-center justify-center
                    transition-transform duration-200 ease-in-out
                    ${
                        theme === "dark"
                            ? "translate-x-6 bg-purple"
                            : "translate-x-0 bg-yellow"
                    }
                `}
            >
                {theme === "dark" ? (
                    <BsMoon className="size-3 text-primary" />
                ) : (
                    <BsSun className="size-3 text-primary" />
                )}
            </div>
        </div>
    );
};
