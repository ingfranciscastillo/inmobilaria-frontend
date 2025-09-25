"use client";

import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

interface LogoProps {
  width: number;
  height: number;
}

const Logo = ({ width, height }: LogoProps) => {
  const { theme } = useTheme();
  console.log(theme);

  return theme === "light" ? (
    <Image src="/logo/logo-dark.png" alt="logo" width={width} height={height} />
  ) : (
    <Image
      src="/logo/logo-white.png"
      alt="logo"
      width={width}
      height={height}
    />
  );
};

export default Logo;
