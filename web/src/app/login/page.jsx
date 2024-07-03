"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { handleLogin } from "../../reducers/Auth/authSlice";
import { getCookie } from "../../utilities/utils";
import rectangle from "../../assets/images/rectangle7.png";
import paw from "../../assets/images/cat-paw.png";

export default function LoginView() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const { error, loading, user } = useSelector((state) => state.auth);

  if (getCookie("refresh_token")) {
    router.push("/admin");
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    dispatch(
      handleLogin({
        data: {
          username,
          password,
        },
        router,
      })
    ).then(() => {
      setLoginSuccess(true);
      setTimeout(() => {
        router.push("/admin");
      }, 1500); // Wait for 1.5 seconds before redirecting
    });
  };

  return (
    <>
      {loginSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          Login successful!
        </div>
      )}
      {error && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded">
          {error}
        </div>
      )}
      <div className="h-[800px] relative bg-white">
        <Image
          src={rectangle}
          alt=""
          height={399}
          width={399}
          className="md:h-[399px] md:w-[399px] h-[250px] w-[250px] absolute left-0 bottom-0"
        />
        <Image
          src={paw}
          alt=""
          height={128}
          width={128}
          className="md:h-32 md:w-32 h-24 w-24 absolute md:-top-20 md:right-12 right-0 -top-20"
        />
        <div className="md:w-[505px] w-[330px] p-9 mt-24 h-[700px] relative z-10 bg-white rounded-[10px] mx-auto shadow-lg border border-zinc-500">
          <h2 className="font-light text-2xl">Welcome!</h2>
          <h1 className="font-medium text-[31px] mt-[31px]">Sign in to</h1>
          <p className="font-normal text-base">Lorem Ipsum is simply </p>
          <form className="space-y-4 md:space-y-6 relative">
            <div className="mt-12">
              <label
                htmlFor="username"
                className="text-base  font-poppinsregular font-normal leading-6 tracking-normal"
              >
                User name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="mt-3 py-[19px] px-7 border font-poppinslight font-light border-zinc-800 text-neutral-400 bg-white sm:text-sm rounded-sm w-full"
                placeholder="Enter your user name"
                required=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-12 relative">
              <label
                htmlFor="password"
                className="text-base font-normal font-poppinsregular leading-6"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your Password"
                className="mt-3 py-[19px] relative px-7 border font-poppinslight font-light border-zinc-800 text-neutral-400 bg-white sm:text-sm rounded-sm w-full"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              className="absolute md:top-0 top-9 bottom-24 right-3  flex items-center cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <EyeIcon className="h-6 w-6 text-neutral-500" />
              ) : (
                <EyeOffIcon className="h-6 w-6 text-neutral-500" />
              )}
            </div>

            <div className="flex justify-between">
              <div className="flex gap-3">
                <input type="checkbox" />
                <p className="font-poppinslight font-light leading-5 text-sm">
                  Remember me
                </p>
              </div>
              <div className="flex items-center justify-between content-center">
                <Link
                  href="/recover"
                  className="font-poppinslight font-light leading-5 text-sm text-[#4D4D4D]"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              onClick={handleEmailPasswordLogin}
              className="md:py-[17px] md:px-[190px] py-3 px-28 bg-teal-600 text-white"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className="flex justify-center ">
              <p className="text-zinc-500 text-base mt-14 font-light font-poppinslight">
                Don&apos;t have an account ?{" "}
                <Link
                  href="/signup"
                  className="font-poppinssemibold text-base font-semibold text-teal-600 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
