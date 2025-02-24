"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ProfileFormProps } from "./ProfileForm.props";
import { updateProfile } from "@/apis/profile";
import { SOMETHING_WRONG_MESSAGE } from "@/constants";

export const ProfileForm = ({ profile, isEditable }: ProfileFormProps) => {
    const router = useRouter();

    const [userData, setUserData] = useState({
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
    });

    const onUpdateProfileSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!userData.firstName.length && !userData.lastName.length) {
            toast.error("Заповніть хоча б одне поле");
        }

        const formData = new FormData();
        formData.append("firstName", userData.firstName);
        formData.append("lastName", userData.lastName);
        formData.append("avatar", new File([], "", { type: "image/png" }));

        try {
            const response = await updateProfile(formData);

            if (response.id) {
                toast.success("Профіль успішно оновлено");
                router.refresh();
            }
        } catch (error) {
            toast.error(SOMETHING_WRONG_MESSAGE);
            console.error(error);
        }
    };

    return (
        <div className="p-4 bg-blackOpacity rounded-md">
            <form onSubmit={onUpdateProfileSubmit}>
                <div>
                    <label htmlFor="email" className="text-gray">
                        {isEditable
                            ? "Ваша пошта"
                            : `Пошта користувача ${profile.firstName} ${profile.lastName}`}
                    </label>
                    <Input
                        id="email"
                        placeholder={profile.email}
                        disabled
                        className="mt-2"
                        type="email"
                    />
                </div>
                <div className="mt-6">
                    <label htmlFor="firstName" className="text-gray">
                        {isEditable ? "Ваше імʼя" : "Імʼя користувача"}
                    </label>
                    <Input
                        type="text"
                        id="firstName"
                        placeholder="Введіть ім'я..."
                        value={userData.firstName}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                firstName: e.target.value,
                            })
                        }
                        className="mt-2"
                    />
                </div>
                <div className="mt-6">
                    <label htmlFor="lastName" className="text-gray">
                        {isEditable ? "Ваше прізвище" : "Прізвище користувача"}
                    </label>
                    <Input
                        type="text"
                        id="lastName"
                        placeholder="Введіть прізвище..."
                        value={userData.lastName}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                lastName: e.target.value,
                            })
                        }
                        className="mt-2"
                    />
                </div>
                <Button
                    type="submit"
                    color="purpleBackground"
                    className="mt-6 mx-auto mb-2"
                >
                    Зберегти зміни
                </Button>
            </form>
        </div>
    );
};
