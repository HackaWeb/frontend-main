"use client";

import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { MyProfileProps } from "./MyProfile.props";
import { motion } from "framer-motion";
import { slideFromBottomAnimation } from "@/constants";
import { LeftColumnProfile } from "@/components/common/LeftColumnProfile";
import { ProfileForm } from "@/components/common/ProfileForm";
import { Table } from "@/components/ui/Table";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

export const MyProfilePageComponent = ({ profile }: MyProfileProps) => {
    const headers = ["ID", "Name", "Email", "Role", "Actions"];

    const data = [
        [
            1,
            "John Doe",
            "john.doe@example.com",
            "Admin",
            <div className="flex gap-2">
                <Button color="purpleBorder">
                    <FaEdit />
                    Edit
                </Button>
                <Button color="redBorder">
                    <FaTrashAlt />
                    Delete
                </Button>
            </div>,
        ],
        [
            2,
            "Jane Smith",
            "jane.smith@example.com",
            "User",
            <div className="flex gap-2">
                <Button color="purpleBorder">
                    <FaEdit />
                    Edit
                </Button>
                <Button color="redBorder">
                    <FaTrashAlt />
                    Delete
                </Button>
            </div>,
        ],
        [
            3,
            "Mark Johnson",
            "mark.johnson@example.com",
            "Moderator",
            <div className="flex gap-2">
                <Button color="purpleBorder">
                    <FaEdit />
                    Edit
                </Button>
                <Button color="redBorder">
                    <FaTrashAlt />
                    Delete
                </Button>
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
                <div className="bg-blackOpacity-light p-4 rounded-md">
                    <div className="flex justify-between">
                        <Input
                            placeholder="Search data..."
                            className="max-w-60"
                        />
                        <div className="flex items-center gap-4">
                            <div className="w-40">
                                <Select
                                    options={[
                                        { value: "1", title: "ID" },
                                        { value: "2", title: "Name" },
                                        { value: "3", title: "Email" },
                                        { value: "4", title: "Role" },
                                    ]}
                                    placeholder="Sort by"
                                    activeOption={null}
                                    setActiveOption={() => {}}
                                    id="sort-by"
                                />
                            </div>
                            <Button className="" color="purpleBackground">
                                New Data
                            </Button>
                        </div>
                    </div>
                    <Table className="mt-4" headers={headers} data={data} />
                </div>
            </div>
        </motion.div>
    );
};
