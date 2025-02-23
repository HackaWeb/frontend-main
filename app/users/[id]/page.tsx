import { getProfile } from "@/apis/user";
import { UserProfilePageComponent } from "@/components/page-components/UserProfile";
import { getCookie } from "@/helpers/getCookie";
import { notFound } from "next/navigation";

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
    /*  const getUserProfileHandler = async () => {
        try {
            const data = await getProfile();

            return { ...data };
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const profile = await getUserProfileHandler();
    if (!profile) notFound(); */
    let profile = {};

    return <UserProfilePageComponent profile={profile} />;
};

export default UserProfile;
