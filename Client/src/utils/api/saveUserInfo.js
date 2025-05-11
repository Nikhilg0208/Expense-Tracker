import { apiConnector } from "../apiConnector";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const saveUserInfo = async (userData, token) => {
  try {
    const saveDetailsApi = `${BACKEND_URL}/user/saveDetails`;
    const response = await apiConnector("POST", saveDetailsApi, userData, {
      Authorization: `Bearer ${token}`,
    });

    return response?.data;
  } catch (error) {
    console.error("Error sending user info to backend:", error);
    throw error;
  }
};
