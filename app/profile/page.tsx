import { getProfile } from "@/apis/user";
import { MyProfilePageComponent } from "@/components/page-components/MyProfile";
import { getCookie } from "@/helpers/getCookie";
import { redirect } from "next/navigation";

const MyProfile = async () => {
    const token = await getCookie("token");

    /* if (!token) {
        redirect("/login");
    }

    const getProfileHandler = async () => {
        try {
            const data = await getProfile();

            if ("statusCode" in data) {
                redirect("/login");
            } else {
                return data;
            }
        } catch (error) {
            console.error(error);
            redirect("/login");
        }
    };

    const profile = await getProfileHandler();
    if (!profile) {
        redirect("/login");
    } */

    let profile = {};
    return <MyProfilePageComponent profile={profile} />;
};

export default MyProfile;
