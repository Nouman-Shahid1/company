"use client";

import { useRouter } from "next/navigation";
// import Authentication from "../../components/Authentication";
import Sidebar from "../../components/Sidebar/sidebar";
import Favicon from "../../app/favicon.png";
import Head from "next/head";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href={Favicon} />
      </Head>
      {/* <Authentication router={router}> */}
        <Sidebar />
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md sm:ml-[340px]">
          {children}
        </div>
      {/* </Authentication> */}
    </>
  );
};

export default Layout;
