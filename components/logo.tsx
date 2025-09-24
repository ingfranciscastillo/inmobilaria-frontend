"use client";

import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  console.log(theme);

  return theme === "light" ? (
    <Image src="/logo/logo-dark.png" alt="logo" width={70} height={60} />
  ) : (
    <Image src="/logo/logo-white.png" alt="logo" width={70} height={60} />
  );
};

export default Logo;
