import { UserProfile } from "@/types/user.interface";
import { fetchApi } from "./fetchApi";

export const getProfile = async (): Promise<UserProfile> =>
    fetchApi({
        endpoint: `/user/profile`,
        isAuthRequired: true,
        method: "GET",
    });

export const updateProfile = async (body: FormData): Promise<UserProfile> =>
    fetchApi({
        endpoint: `/user/profile`,
        isAuthRequired: true,
        method: "PUT",
        body,
    });

interface DeleteUserAvatarResponse {
    success: true;
}
export const deleteAvatar = async (): Promise<DeleteUserAvatarResponse> =>
    fetchApi({
        endpoint: `/user/profile/image`,
        isAuthRequired: true,
        method: "DELETE",
    });
