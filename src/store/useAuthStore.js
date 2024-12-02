import { create } from "zustand";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create((set, get) => ({
  user: null,
  token: null,
  isLoggedIn: false,

  login: (userInfo, token) => {
    // console.log("Login - Token:", token);

    Cookies.set("user", JSON.stringify(userInfo), { expires: 1 / 24 });
    Cookies.set("token", token, { expires: 1 / 24 });

    set({ user: userInfo, token, isLoggedIn: true });
  },

  logout: () => {
    Cookies.remove("user");
    Cookies.remove("token");
    set({ user: null, token: null, isLoggedIn: false });
  },
  isAuthenticated: () => get().isLoggedIn,

  initializeAuth: () => {
    const user = Cookies.get("user");
    const token = Cookies.get("token");

    if (user && token) {
      set({ user: JSON.parse(user), token, isLoggedIn: true });
    }
  },
}));

// Gọi hàm initializeAuth ngay sau khi tạo store
useAuthStore.getState().initializeAuth();

export default useAuthStore;
