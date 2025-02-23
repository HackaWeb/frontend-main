"use client";

import { useState } from "react";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui/Button";
import { deleteAvatar, updateProfile } from "@/apis/user";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LeftColumnProfileProps } from "./LeftColumnProfile.props";
import { motion } from "framer-motion";
import { popAnimation, SOMETHING_WRONG_MESSAGE } from "@/constants";
import { printUserNickname } from "@/helpers/printUserNickname";

export const LeftColumnProfile = ({
    profile,
    isEditable,
}: LeftColumnProfileProps) => {
    const router = useRouter();

    const [avatar, setAvatar] = useState<string | null>(profile.avatar ?? null);

    const updateAvatarHandler = async (imageData: File) => {
        const formData = new FormData();
        formData.append("avatar", imageData);

        try {
            const res = await updateProfile(formData);

            if (res.id) {
                setAvatar(res.avatar);
                router.refresh();
                toast.success("Аватар успішно змінено!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteAvatarHandler = async () => {
        try {
            const res = await deleteAvatar();

            if (res.success) {
                toast.success("Аватар видалено успішно!");
                setAvatar(null);
            }
        } catch (error) {
            console.error(error);
            toast.error(SOMETHING_WRONG_MESSAGE);
        }
        router.refresh();
    };

    const onAvatarChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setAvatar(URL.createObjectURL(file));
        await updateAvatarHandler(file);
    };

    return (
        <div className="max-w-[400px]">
            <div className="p-4 bg-blackOpacity rounded-md">
                <div className="w-full h-auto aspect-square border border-purple rounded-md p-2 relative">
                    {isEditable && avatar && (
                        <Button
                            className="absolute top-1 right-1 p-1 z-10"
                            onClick={deleteAvatarHandler}
                            color="redBorder"
                            name="Видалити аватар"
                            aria-label="Видалити аватар"
                        >
                            <AiOutlineClose className="size-5" />
                        </Button>
                    )}
                    <motion.div
                        key={avatar}
                        {...popAnimation}
                        className="bg-blackOpacity-dark w-full h-full flex items-center justify-center rounded-md overflow-hidden"
                    >
                        {avatar ? (
                            <>
                                <Image
                                    src={avatar}
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </>
                        ) : (
                            <AiOutlineUser className="text-purple size-20" />
                        )}
                    </motion.div>
                </div>
                {isEditable && (
                    <label className="underline text-purple mt-2 text-center block cursor-pointer">
                        Змінити аватар
                        <input
                            type="file"
                            accept=".png,.jpeg"
                            className="hidden"
                            onChange={onAvatarChange}
                        />
                    </label>
                )}
                <div className="mt-2 text-center text-xl font-semibold">
                    {printUserNickname(profile.firstName, profile.lastName)}
                </div>
            </div>
        </div>
    );
};
