import { UserProfile } from "@/types/user.interface";
import { fetchApi } from "./fetchApi";
import { DeleteProfileImageResponse } from "./responses/profile.type";
import { UpdateProfileBody } from "./bodies/profile.interface";
import { UpdateProfileImageResponse } from "./responses/profile.type";

export const getProfile = async (): Promise<UserProfile> =>
    fetchApi({
        endpoint: `/profile`,
        isAuthRequired: true,
        method: "GET",
    });

export const updateProfile = async (
    body: UpdateProfileBody,
): Promise<UserProfile> =>
    fetchApi({
        endpoint: `/profile`,
        isAuthRequired: true,
        method: "PUT",
        body,
    });

export const updateProfileImage = async (
    body: FormData,
): Promise<UpdateProfileImageResponse> =>
    fetchApi({
        endpoint: `/profile/image`,
        isAuthRequired: true,
        method: "POST",
        body,
    });

export const deleteProfileImage =
    async (): Promise<DeleteProfileImageResponse> =>
        fetchApi({
            endpoint: `/profile/image`,
            isAuthRequired: true,
            method: "DELETE",
        });
