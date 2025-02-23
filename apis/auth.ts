import { CredentialResponse } from "@react-oauth/google";
import { fetchApi } from "./fetchApi";

interface AuthorizationBody {
    email: string;
    password: string;
}
interface AuthorizationResponse {
    token: string;
}
export const register = async (
    body: AuthorizationBody,
): Promise<AuthorizationResponse> =>
    fetchApi({
        endpoint: "/auth/register",
        isAuthRequired: false,
        method: "POST",
        body: body,
    });

export const login = async (
    body: AuthorizationBody,
): Promise<AuthorizationResponse> =>
    fetchApi({
        endpoint: "/auth/login",
        isAuthRequired: false,
        method: "POST",
        body: body,
    });

interface GoogleAuthBody {
    credential: CredentialResponse["credential"];
}
export const googleAuth = async (body: GoogleAuthBody): Promise<any> =>
    fetchApi({
        endpoint: "/auth/login/google",
        isAuthRequired: false,
        method: "GET",
        body: body
    });
