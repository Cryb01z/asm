import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../../store/useAuthStore";
import { jwtDecode } from "jwt-decode";
import { postLogin } from "../../axios/AuthService/AuthService";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const login = useAuthStore((state) => state.login);

  const handleInput = (key, e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleLogin = async () => {
    console.log(formData);
    try {
      const response = await postLogin(formData);
      // console.log(response);
      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      // console.log(decodedToken);
      const {sub: username, exp} = decodedToken;
      login({username}, token);

      toast.success("Login successfully !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/scan");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("Login fail! Check username or password!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="pt-20 min-h-screen flex items-stretch">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center "
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')`,
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide text-white">
            ASM Granduation
          </h1>
          <p className="text-3xl my-4 text-white">
            Extended Threat Intelligence
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center  md:px-16 px-0 z-0 bg-zinc-900">
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')`,
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20 text-white">
          <h2 className="mt-3 text-3xl font-bold text-center">Welcome Back!</h2>
          <p className="mt-2 text-sm text-white text-center">
            Please sign in to your account
          </p>

          <form
            className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="flex items-center justify-center pb-2 pt-8">
              <div className="relative">
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none  bg-inherit"
                  onChange={(e) => {
                    handleInput("email", e);
                  }}
                />
                <label
                  className={`absolute left-0 top-1.5 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 ${
                    formData.email ? "text-xs !-top-4 text-border-blue-70" : ""
                  }`}
                >
                  Username
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center pb-2 pt-8">
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                  onChange={(e) => {
                    handleInput("password", e);
                  }}
                />
                <label
                  className={`absolute left-0 top-1.5 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 ${
                    formData.password
                      ? "text-xs !-top-4 text-border-blue-70"
                      : ""
                  }`}
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center pb-2 pt-4 text-xs text-white-400 space-x-10">
              <span>
                {" "}
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label>Remember Me</label>
              </span>
              <a
                className="hover:underline hover:text-blue-500 "
                href="/forgetpass"
              >
                Forget password?
              </a>
              {/* <ForgetPass/> */}
            </div>

            <div className="pb-2 pt-4 px-4 flex items-center justify-center">
              <button
                type="submit"
                className="text-sm text-Blueviolet font-medium px-[70px] py-[12.5px] border-[0] rounded-[100px] bg-[#2ba8fb] text-[#ffffff] font-[Bold] [transition:all_0.5s] hover:bg-[#6fc5ff] hover:[box-shadow:0_0_20px_#6fc5ff50] hover:scale-110 active:bg-[#3d94cf] active:[transition:all_0.25s] active:[box-shadow:none] active:scale-[0.98]"
              >
                Log In
              </button>
            </div>

            <div className="flex items-center justify-center pb-2 pt-4 text-xs text-white-400 space-x-1">
              <span>Don’t have an account yet? </span>
              <span
                className="hover:underline hover:text-blue-500 "
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign up
              </span>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
