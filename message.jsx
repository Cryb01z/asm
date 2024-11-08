import React, { useState, useCallback, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { postGoogleLogin, postLogin } from "../../lib/service/authService";
import useAuthStore from "../../store/useAuthStore";
import { jwtDecode } from "jwt-decode"; // Nhập chính xác
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { registerAxiosInterceptors } from "../../lib/axiosCustomize";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordShown((prev) => !prev);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const response = await postLogin(data);
      const { token, refreshToken } = response.data.data;

      // Decode token để lấy thông tin người dùng
      const decodedToken = jwtDecode(token);
      const { sub: userEmail, name, id, exp } = decodedToken;
      const role =
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];

      if (role === "User") {
        login({ email: userEmail, name, role, id }, token, refreshToken);
        registerAxiosInterceptors(); // Register interceptors after successful login
        navigate("/feet");
      } else {
        toast.error("Bạn không có quyền truy cập.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "Đăng nhập thất bại.");
    }
  };

  const clearGoogleCookies = useCallback(() => {
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
  }, []);

  useEffect(() => {
    clearGoogleCookies();
  }, [clearGoogleCookies]);

  const handleGoogleLoginSuccess = async (response) => {
    try {
      const res = await postGoogleLogin({ token: response.access_token });
      const { token, refreshToken } = res.data.data;

      handleLoginSuccess(token, refreshToken);
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "Đăng nhập Google thất bại.");
    }
  };

  const handleLoginSuccess = (token, refreshToken) => {
    const decodedToken = jwtDecode(token);
    const { sub: email, name, id, avatar, exp } = decodedToken;
    const role =
      decodedToken[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];

    if (role === "User") {
      const expirationTime = exp * 1000; // Convert to milliseconds
      login(
        { email, name, role, id, avatar },
        token,
        refreshToken,
        expirationTime
      );
      registerAxiosInterceptors();
      navigate("/feet");
    } else {
      toast.error("Bạn không có quyền truy cập.");
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: () => toast.error("Đăng nhập Google thất bại."),
  });

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-4 py-6 mt-2">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row w-full max-w-6xl">
        <div className="lg:w-1/2 w-full px-4">
          <h2 className="text-3xl font-bold text-gray-700 mb-2">Đăng nhập</h2>
          <p className="text-gray-500 mb-4">
            Đăng nhập để truy cập tài khoản của bạn
          </p>

          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Tên đăng nhập
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@gmail.com"
                className="w-full px-5 py-3 border rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700">
                Mật khẩu
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full px-5 py-3 border rounded-full focus:outline-none focus:border-blue-500 pr-12"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer mt-6"
              >
                {passwordShown ? (
                  <AiFillEyeInvisible size={24} />
                ) : (
                  <AiFillEye size={24} />
                )}
              </span>
              <Link
                to="/forgot-password"
                className="text-red-500 text-sm float-right mt-4"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                className="mr-2 leading-tight"
              />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition duration-200 text-lg"
            >
              Đăng nhập
            </button>
          </form>

          <p className="text-gray-500 mt-4">
            Bạn chưa có tài khoản?{" "}
            <Link to="/signup" className="text-green-500">
              Đăng ký
            </Link>
          </p>

          <div className="flex items-center mt-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Hoặc đăng nhập với</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex mt-4 justify-center">
            <button
              onClick={googleLogin}
              className="flex items-center border border-red-500 px-6 py-3 rounded-full hover:bg-red-100 transition duration-200"
            >
              <img
                src="https://itviec.com/assets/google_logo-af373a5e64715e7d4fcdea711f96995f7fd7a49725b3dd8910d4749b74742cb2.svg"
                alt="Google Logo"
                className="w-6 h-6 mr-3"
              />
              <span className="text-red-500 font-medium">
                Sign In with Google
              </span>
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nongdanonline-458d0.appspot.com/o/LandingPage%2Ffarm_1.gif?alt=media&token=f14f9a0f-cda3-42cf-9701-56c613cf6e79"
            alt="Illustration"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);
