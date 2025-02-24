"use client";

import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { MyProfileProps } from "./MyProfile.props";
import { motion } from "framer-motion";
import { slideFromBottomAnimation } from "@/constants";
import { LeftColumnProfile } from "@/components/common/LeftColumnProfile";
import { ProfileForm } from "@/components/common/ProfileForm";
import { Table } from "@/components/ui/Table";

export const MyProfilePageComponent = ({ profile }: MyProfileProps) => {
    return (
        <motion.div {...slideFromBottomAnimation} className="mt-8">
            <h1>Мій кабінет</h1>
            <ReturnBtn className="mt-4" />
            <div className="mt-8 grid grid-cols-[1fr] sm:grid-cols-[240px_auto] 2xl:grid-cols-[240px_330px_auto] gap-6 items-start">
                <div>
                    <LeftColumnProfile profile={profile} isEditable={true} />
                </div>
                <ProfileForm profile={profile} isEditable={true} />
                <div>Something else...</div>
            </div>
        </motion.div>
    );
};
