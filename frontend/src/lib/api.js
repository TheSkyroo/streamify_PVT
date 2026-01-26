import { axiosInstance } from "./axios";

export const signup = async (data) => {
    const response = await axiosInstance.post("/auth/signup", data);
    return response.data;
};

export const getAuthUser = async () => {
    const response = await axiosInstance.get("/auth/me");
    return response.data;
};

export const completeOnboarding = async (userData) => {
    const response = await axiosInstance.post("/auth/onboarding", userData);
    return response.data;
};
