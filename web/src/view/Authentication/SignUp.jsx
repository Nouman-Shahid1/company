// "use client";
// import React, { useState } from "react";
// import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
// import Link from "next/link";
// import Image from "next/image";
// import ToastNotification from "../../components/Notification/ToastNotification";
// import rectangle from "../../assets/images/rectangle7.png";
// import paw from "../../assets/images/cat-paw.png";

// const SignUpView = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleToggleConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <>
//       <ToastNotification />
//       <div className="h-[850px] relative bg-white">
//         <Image
//           src={rectangle}
//           alt=""
//           height={399}
//           width={399}
//           className="md:h-[399px] md:w-[399px] h-[250px] w-[250px] absolute left-0 bottom-0"
//         />
//         <Image
//           src={paw}
//           alt=""
//           height={128}
//           width={128}
//           className="md:h-32 md:w-32 h-24 w-24 absolute md:-top-20 md:right-12 right-0 -top-20"
//         />
//         <div className="md:w-[505px] w-[330px] p-9 mt-20 h-[770px] relative z-10 bg-white rounded-[10px] mx-auto shadow-lg border border-zinc-500">
//           <h2 className="font-light text-2xl leading-6">Welcome!</h2>
//           <h1 className="font-medium text-[31px] mt-[10px]">Sign up to</h1>
//           <p className="font-normal text-base">Lorem Ipsum is simply </p>
//           <form className="space-y-4 md:space-y-6 relative">
//             <div className="mt-5">
//               <label
//                 htmlFor="username"
//                 className="text-base  font-poppinsregular font-normal leading-6 tracking-normal"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="username"
//                 className="mt-3 py-[19px] px-7 border font-poppinslight font-light border-zinc-800 text-neutral-400 bg-white sm:text-sm rounded-sm w-full"
//                 placeholder="Enter your Email"
//                 required=""
//               />
//             </div>
//             <div className="mt-7">
//               <label
//                 htmlFor="username"
//                 className="text-base  font-poppinsregular font-normal leading-6 tracking-normal"
//               >
//                 User name
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 id="username"
//                 className="mt-3 py-[19px] px-7 border font-poppinslight font-light border-zinc-800 text-neutral-400 bg-white sm:text-sm rounded-sm w-full"
//                 placeholder="Enter your user name"
//                 required=""
//               />
//             </div>
//             <div className="mt-7 relative">
//               <label
//                 htmlFor="password"
//                 className="text-base font-normal font-poppinsregular leading-6"
//               >
//                 Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 id="password"
//                 placeholder="Enter your Password"
//                 className="mt-3 py-[19px] relative px-7 border font-poppinslight font-light border-zinc-800 text-neutral-400 bg-white sm:text-sm rounded-sm w-full"
//                 required=""
//               />
//               <div
//                 className="absolute top-0 -bottom-8 right-3  flex items-center cursor-pointer"
//                 onClick={handleTogglePassword}
//               >
//                 {showPassword ? (
//                   <EyeIcon className="h-6 w-6 text-neutral-500" />
//                 ) : (
//                   <EyeOffIcon className="h-6 w-6 text-neutral-500" />
//                 )}
//               </div>
//             </div>

//             <div className="mt-7 relative">
//               <label
//                 htmlFor="password"
//                 className="text-base font-normal font-poppinsregular leading-6"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 id="password"
//                 placeholder="Confirm Password"
//                 className="mt-3 py-[19px] relative px-7 border font-poppinslight font-light border-zinc-800 text-neutral-400 bg-white sm:text-sm rounded-sm w-full"
//                 required=""
//               />
//               <div
//                 className="absolute top-0 -bottom-8 right-3  flex items-center cursor-pointer"
//                 onClick={handleToggleConfirmPassword}
//               >
//                 {showConfirmPassword ? (
//                   <EyeIcon className="h-6 w-6 text-neutral-500" />
//                 ) : (
//                   <EyeOffIcon className="h-6 w-6 text-neutral-500" />
//                 )}
//               </div>
//             </div>

//             <button className="md:py-[17px] md:px-[190px] py-3 px-[104px] bg-teal-600 text-white">
//               SignUp
//             </button>
//             <div className="flex justify-center ">
//               <p className="text-zinc-500 text-base  font-light font-poppinslight">
//                 Already have an account ?{" "}
//                 <Link
//                   href="/login"
//                   className="font-poppinssemibold text-base font-semibold text-teal-600 hover:underline dark:text-primary-500"
//                 >
//                   Login
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SignUpView;
