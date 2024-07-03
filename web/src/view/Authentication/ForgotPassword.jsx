"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { forgetPassword } from "../../reducers/Auth/authSlice";
import ToastNotification from "../../components/Notification/ToastNotification";
import sent from "../../assets/images/icons/sent.png";
import paw from "../../assets/images/cat-paw.png";
import rectangle from "../../assets/images/rectangle7.png";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isEmailSent } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");

  const handleForgetPassword = (event) => {
    event.preventDefault();

    if (isEmailSent) {
      router.push("/login");
    } else {
      dispatch(forgetPassword({ email }));
    }
  };

  return (
    <>
      <ToastNotification />

      <div className="h-[850px] relative bg-white">
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
        <div className="md:w-[505px] w-[330px] p-9 mt-24 relative z-10 bg-white rounded-[10px] mx-auto shadow-lg border border-zinc-500">
          <h2 className="font-light text-2xl">Forget Password</h2>
          <h1 className="font-medium text-[31px] mt-[31px]">Send Email</h1>
          <p className="font-normal text-base">
            We will send you an email with instructions on how to change your
            password{" "}
          </p>

          <div className="relative">
            {!isEmailSent && (
              <div className="mt-8 md:mt-14">
                <label
                  htmlFor="username"
                  className="text-base  font-poppinsregular font-normal leading-6 tracking-normal"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="mt-3 py-[19px] px-7 border font-poppinslight font-light border-zinc-800 text-neutral-400 bg-white sm:text-sm rounded-sm w-full"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}
            {isEmailSent && (
              <Image
                src={sent}
                alt=""
                height={100}
                width={100}
                className="mx-auto mt-8 md:mt-14"
              />
            )}
            <button
              className="md:mt-16 md:py-[17px] py-3 w-[100%] bg-teal-600 text-white"
              onClick={handleForgetPassword}
            >
              {isEmailSent ? "Login" : "Send"}
            </button>
            <div className="flex justify-center">
              <p className="text-zinc-500 text-base mt-10 font-light font-poppinslight">
                Don&apos;t have an account ?{" "}
                <Link
                  href="/signup"
                  className="font-poppinssemibold text-base font-semibold text-teal-600 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
