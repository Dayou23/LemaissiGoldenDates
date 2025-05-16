"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { headerLinks } from "@/constants";
import MenuLinks from "./MenuLinks";
import { MenuIcon, X } from "lucide-react";

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="">
      {showSidebar ? (
        <X
          color="#976348"
          className=" cursor-pointer fixed right-[16px] top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      ) : (
        <MenuIcon
          color="#976348"
          onClick={() => setShowSidebar(!showSidebar)}
          className="cursor-pointer"
        />
      )}

      <div
        className={`flex flex-col justify-center top-0 right-0 w-[75vw] bg-white  p-10 pl-20 text-black fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        {/* <MenuLinks translations={translations} /> */}
        <div className="flex flex-col  justify-center gap-2 pt-6">
          {headerLinks.map((item, index) => (
            <Link
              href={item.route}
              className="cursor-pointer flex items-center text-sm font-light font-serif hover:text-primary"
              key={index}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center pt-5">
          <Image
            src="/facebook.png"
            alt="facebook"
            width={26}
            height={26}
            className="cursor-pointer mr-3"
          />
          <Image
            src="/instagram.png"
            alt="instagram"
            width={28}
            height={28}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
