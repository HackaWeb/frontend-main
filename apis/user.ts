import { UserProfile } from "@/types/user.interface";
import { fetchApi } from "./fetchApi";

export const getProfile = async (): Promise<UserProfile> =>
    fetchApi({
        endpoint: `/profile`,
        isAuthRequired: true,
        method: "GET",
    });

export const updateProfile = async (body: FormData): Promise<UserProfile> =>
    fetchApi({
        endpoint: `/profile`,
        isAuthRequired: true,
        method: "PUT",
        body,
    });
