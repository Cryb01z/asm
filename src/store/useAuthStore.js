import { create } from "zustand";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const refreshTokenAPI = async (refreshToken) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}auth/refresh-token`,
    { refreshToken }
  );
  return response.data.data;
};

const useAuthStore = create((set, get) => ({
  user: null,
  token: null,
  refreshToken: null,
  isLoggedIn: false,

  login: (userInfo, token, refreshToken) => {
    // console.log("Login - Token:", token);
    // console.log("Login - RefreshToken:", refreshToken);

    Cookies.set("user", JSON.stringify(userInfo), { expires: 1 / 48 });
    Cookies.set("token", token, { expires: 1 / 24 });
    Cookies.set("refreshToken", refreshToken, { expires: 7 });

    set({ user: userInfo, token, refreshToken, isLoggedIn: true });
  },

  logout: () => {
    Cookies.remove("user");
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    set({ user: null, token: null, refreshToken: null, isLoggedIn: false });
  },
  isAuthenticated: () => !!get().user,

  setFarmID: (id) => {
    Cookies.set("farmID", id, { expires: 1 });
    set({ farmID: id });
  },

  getFarmID: () => get().farmID,

  getNewAccessToken: async () => {
    const refreshToken = get().refreshToken || Cookies.get("refreshToken");

    if (!refreshToken) {
      console.warn("Không tìm thấy refresh token.");
      throw new Error("No refresh token available.");
    }

    try {
      const { token, refreshToken: newRefreshToken } = await refreshTokenAPI(
        refreshToken
      );
      // Cookies.set("token", token, { expires: 1 / 2880 });
      Cookies.set("token", token, { expires: 1 / 24 });

      Cookies.set("refreshToken", newRefreshToken, { expires: 7 });
      set({ token, refreshToken: newRefreshToken });
      return { token, refreshToken: newRefreshToken };
    } catch (error) {
      console.error("Không thể refresh token:", error);
      get().logout();
      throw error;
    }
  },

  isTokenExpired: () => {
    const { token } = get();
    if (!token) return true;

    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp * 1000;
    } catch (error) {
      console.error("Token không hợp lệ:", error);
      return true;
    }
  },

  // Thêm hàm này để khôi phục trạng thái từ cookies
  initializeAuth: () => {
    const user = Cookies.get("user");
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("refreshToken");

    if (user && token && refreshToken) {
      set({
        user: JSON.parse(user),
        token,
        refreshToken,
        isLoggedIn: true,
      });
    }
  },
}));

// Gọi hàm initializeAuth ngay sau khi tạo store
useAuthStore.getState().initializeAuth();

export default useAuthStore;
