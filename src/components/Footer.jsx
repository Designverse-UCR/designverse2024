import Image from "next/image";
import mushroomsLeft from "@/public/svgs/footer/mushroomsFooterLeft.svg";
import mushroomsRight from "@/public/svgs/footer/mushroomsFooterRight.svg";
import FooterWithoutEmoji from "@/public/svgs/footer/FooterWithoutEmoji.svg";
import logo from "@/public/svgs/logos/whiteLogo.svg";
import { FaHeart, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between bg-newdesign-cyan-200 text-white relative">
      <Image
        src={mushroomsLeft}
        className="w-3/12 md:w-3/12 z-10"
        alt="mushroomsLeft"
      />
      <div className="flex flex-col items-center justify-end w-2/12 md:w-full z-10">
        <Image src={logo} width={100} />

        <div className="flex space-x-1 md:gap-5 w-full justify-center items-center mt-4">
          <Link href="mailto:designverseucr@gmail.com ">
            {" "}
            <IoIosMail className="text-3xl lg:text-4xl hover:cursor-pointer text-white" />{" "}
          </Link>
          <Link href="https://www.instagram.com/designverseucr/">
            {" "}
            <RiInstagramFill className="text-2xl lg:text-3xl hover:cursor-pointer text-white" />
          </Link>
          <Link href="https://www.linkedin.com/company/designverseucr">
            <FaLinkedinIn className="text-2xl lg:text-3xl hover:cursor-pointer text-white" />{" "}
          </Link>
          {/* <RiFacebookBoxFill className="text-3xl hover:cursor-pointer" /> */}
          {/* <FaDiscord className="text-3xl hover:cursor-pointer" /> */}
        </div>
        <div className="flex items-center text-sm md:text-lg font-workSans font-light lg:my-3 justify-center whitespace-nowrap">
          Made with&nbsp;
          <FaHeart className="mx-1" />
          &nbsp;by the DesignVerse Team 2024
        </div>
      </div>
      <Image src={mushroomsRight} className="w-2/12 md:w-3/12 z-10" />
      <div className=" flex w-full absolute mt-14 z-0 bottom-0">
        <Image src={FooterWithoutEmoji} className="w-full" />
      </div>
    </div>
  );
};

export default Footer;
