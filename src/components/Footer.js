import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full text-lg border-t-0 border-solid border-dark font-base dark:text-light dark:border-light sm:text-base ">
      <Layout className="flex items-center justify-center py-8 lg:flex-col lg:py-6">
        <span>&copy; {new Date().getFullYear()}</span>

        {/* <div className="flex items-center ml-2 lg:py-2">
          Built <span className="px-1 text-2xl"></span>
          {""}
          by&nbsp;
          <Link
            href="https://travislord.xyz/"
            className="underline underline-offset-2"
          >
            Travis Lord
          </Link>
        </div> */}
      </Layout>
    </footer>
  );
};

export default Footer;
