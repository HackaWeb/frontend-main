import { CredentialResponse } from "@react-oauth/google";

export interface AuthorizationBody {
    email: string;
    password: string;
}

export interface RefreshTokenBody {
    refreshToken: string;
}

export interface GoogleAuthBody {
    token: CredentialResponse["credential"];
}
