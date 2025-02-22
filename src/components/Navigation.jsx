"use client";

import { useState } from "react";
import LOGO from "@/public/svgs/logos/BigLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { TABS } from "@/data/Navigation";
import { usePathname } from "next/navigation";
import data from "@/data/Config";
import { BiSolidDownArrow } from "react-icons/bi";

const Navigation = () => {
  const [expand, setExpand] = useState(false);
  const pathName = usePathname();
  const [tabs, setTabs] = useState(TABS[pathName.split("/")[1]]);

  return (
    <>
      <div className="flex lg:hidden w-full !bg-design-white h-12 items-center fixed z-20">
        <div
          className="flex items-center hover:cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          <Image src={LOGO} className="w-3/12 m-2" alt={`${data.name} Logo`} />
          <div className="text-black text-xl font-semibold">
            {pathName.split("/")[2]}
          </div>
        </div>
      </div>
      <div
        className={`overflow-y-scroll z-10 lg:flex lg:w-[12%] ${
          expand ? "left-0 h-screen w-1/2 fixed pt-5" : `hidden`
        }`}
      >
        <div className="overflow-y-scroll bg-design-green-400 h-full flex flex-col justify-between items-center w-full">
          <div className="hidden lg:flex items-center justify-center my-3">
            <Image
              src={LOGO}
              className="lg:w-10/12"
              alt={`${data.name} Logo`}
            />
          </div>
          <div className="w-full flex flex-col items-center h-full">
            {Object.entries(tabs)
              .filter(([title]) => title !== " " && title !== "dropdown")
              .map(([title, subTabs], index) => (
                <div key={index} className="w-full">
                  <p
                    className={`text-white text-xl font-poppin font-bold w-full px-2 mb-0 flex items-center justify-between hover:cursor-pointer ${subTabs.mt} opacity-100 hover:opacity-40 transition-opacity`}
                    onClick={() =>
                      setTabs({
                        ...tabs,
                        [title]: { ...subTabs, expand: !subTabs.expand },
                      })
                    }
                  >
                    {title}
                    {tabs.dropdown && (
                      <BiSolidDownArrow
                        className={`text-sm duration-300 ${
                          subTabs.expand && "rotate-180"
                        }`}
                      />
                    )}
                  </p>
                  {(subTabs.expand || !tabs.dropdown) &&
                    subTabs.tabs.map((tab, index) => (
                      <Link
                        key={index}
                        href={tab.link}
                        className="no-underline p-0 w-full"
                      >
                        <div
                          onClick={() => setExpand(false)}
                          className={`w-full flex [&>*]:text-white items-center justify-start py-1 pl-[10%] ${
                            pathName.endsWith(tab.link)
                              ? "bg-design-orange"
                              : "[&>*]:hover:text-design-orange"
                          }`}
                        >
                          {tab.icon}
                          <p className="text-lg m-0">{tab.name}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              ))}
          </div>
          <div className="w-full flex flex-col items-center mb-3">
            {tabs[" "].map((tab, index) => (
              <Link
                key={index}
                href={tab.link}
                target="_blank"
                onClick={() => tab.onClick()}
                className="no-underline w-full"
              >
                <div
                  onClick={() => setExpand(false)}
                  className={`w-full flex [&>*]:text-white items-center justify-start pl-[10%] py-1 ${
                    pathName.endsWith(tab.link)
                      ? "bg-design-white"
                      : "[&>*]:hover:text-design-orange"
                  }`}
                >
                  {tab.icon}
                  <div className="text-lg">{tab.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
