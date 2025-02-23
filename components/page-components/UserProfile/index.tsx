"use client";

import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { motion } from "framer-motion";
import { slideFromBottomAnimation } from "@/constants";
import { printUserNickname } from "@/helpers/printUserNickname";
import { UserProfileProps } from "./UserProfile.props";
import { LeftColumnProfile } from "@/components/common/LeftColumnProfile";
import { ProfileForm } from "@/components/common/ProfileForm";

export const UserProfilePageComponent = ({ profile }: UserProfileProps) => {
    return (
        profile && (
            <motion.div {...slideFromBottomAnimation} className="mt-8">
                <h1>
                    Профіль користувача{" "}
                    {printUserNickname(profile.firstName, profile.lastName)}
                </h1>
                <ReturnBtn className="mt-4" />
                <div className="mt-8 grid grid-cols-[1fr] 2xl:grid-cols-[240px_auto] gap-6 items-start">
                    <div>
                        <LeftColumnProfile
                            profile={profile}
                            isEditable={false}
                        />
                    </div>
                    <div>Something else...</div>
                </div>
            </motion.div>
        )
    );
};
