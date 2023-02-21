import React, { ComponentProps } from "react";
import BottomNavigation from "./BottonNavigation";
import Header from "./Header";

type MyComponentProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: MyComponentProps) {
  return (
    <div className="h-screen max-w-full m-auto bg-yellow-200">
      {/* <Header /> */}
      {children}
      {/* <BottomNavigation /> */}
    </div>
  );
}
