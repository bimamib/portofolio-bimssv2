import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center w-16 text-white rounded-full h-18 bg-dark dark:border-1 dark:border-solid dark:border-dark"
      >
        <img
          src="/BimaPrast-logo.png"
          alt="Logo"
          className="object-contain w-10 w-full h-10 h-full px-2 py-2 rounded-full"
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
