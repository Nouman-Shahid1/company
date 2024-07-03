"use client";
import { Bona_Nova } from "@next/font/google";
import dynamic from "next/dynamic";
import store from "../store/store";
import Head from "next/head";
import "./globals.css";

const bonaNova = Bona_Nova({ weight: "400", subsets: ["latin"] });

const DynamicProvider = dynamic(
  () => import("react-redux").then((mod) => mod.Provider),
  { ssr: true }
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bonaNova.className}>
        <DynamicProvider store={store}>{children}</DynamicProvider>
      </body>
    </html>
  );
}
