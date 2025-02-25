"use client";

import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { MyProfileProps } from "./MyProfile.props";
import { motion } from "framer-motion";
import { slideFromBottomAnimation } from "@/constants";
import { LeftColumnProfile } from "@/components/common/LeftColumnProfile";
import { ProfileForm } from "@/components/common/ProfileForm";
import { Table } from "@/components/ui/Table";
import { FaEdit, FaTrashAlt, FaExternalLinkAlt } from "react-icons/fa"; // иконки

export const MyProfilePageComponent = ({ profile }: MyProfileProps) => {
    const headers = ["ID", "Name", "Email", "Role", "Actions"];

    const data = [
        [
            1,
            "John Doe",
            "john.doe@example.com",
            "Admin",
            <div className="flex gap-2">
                <button className="p-2 bg-blue-500 text-white rounded flex items-center gap-1">
                    <FaEdit />
                    Edit
                </button>
                <button className="p-2 bg-red-500 text-white rounded flex items-center gap-1">
                    <FaTrashAlt />
                    Delete
                </button>
                <a
                    href="https://example.com"
                    target="_blank"
                    className="p-2 bg-green-500 text-white rounded flex items-center gap-1"
                >
                    <FaExternalLinkAlt />
                    Visit
                </a>
            </div>,
        ],
        [
            2,
            "Jane Smith",
            "jane.smith@example.com",
            "User",
            <div className="flex gap-2">
                <button className="p-2 bg-blue-500 text-white rounded flex items-center gap-1">
                    <FaEdit />
                    Edit
                </button>
                <button className="p-2 bg-red-500 text-white rounded flex items-center gap-1">
                    <FaTrashAlt />
                    Delete
                </button>
                <a
                    href="https://example.com"
                    target="_blank"
                    className="p-2 bg-green-500 text-white rounded flex items-center gap-1"
                >
                    <FaExternalLinkAlt />
                    Visit
                </a>
            </div>,
        ],
        [
            3,
            "Mark Johnson",
            "mark.johnson@example.com",
            "Moderator",
            <div className="flex gap-2">
                <button className="p-2 bg-blue-500 text-white rounded flex items-center gap-1">
                    <FaEdit />
                    Edit
                </button>
                <button className="p-2 bg-red-500 text-white rounded flex items-center gap-1">
                    <FaTrashAlt />
                    Delete
                </button>
                <a
                    href="https://example.com"
                    target="_blank"
                    className="p-2 bg-green-500 text-white rounded flex items-center gap-1"
                >
                    <FaExternalLinkAlt />
                    Visit
                </a>
            </div>,
        ],
        [
            4,
            "Emily Davis",
            "emily.davis@example.com",
            "User",
            <div className="flex gap-2">
                <button className="p-2 bg-blue-500 text-white rounded flex items-center gap-1">
                    <FaEdit />
                    Edit
                </button>
                <button className="p-2 bg-red-500 text-white rounded flex items-center gap-1">
                    <FaTrashAlt />
                    Delete
                </button>
                <a
                    href="https://example.com"
                    target="_blank"
                    className="p-2 bg-green-500 text-white rounded flex items-center gap-1"
                >
                    <FaExternalLinkAlt />
                    Visit
                </a>
            </div>,
        ],
    ];

    return (
        <motion.div
            {...slideFromBottomAnimation}
            className="mt-8 bg-blackOpacity-light p-6"
        >
            <h1>Мій кабінет</h1>
            <ReturnBtn className="mt-4" />
            <div className="mt-8 grid grid-cols-[1fr] sm:grid-cols-[240px_auto] 2xl:grid-cols-[240px_330px_auto] gap-6 items-start">
                <div>
                    <LeftColumnProfile profile={profile} isEditable={true} />
                </div>
                <ProfileForm profile={profile} isEditable={true} />
                <Table headers={headers} data={data} />
            </div>
        </motion.div>
    );
};
