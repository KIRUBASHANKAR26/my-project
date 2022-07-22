import React from "react";
import Link from "next/link";
import Logo from "../assets/images/Logo.svg";
import Image from "next/image";
import Menu from "../assets/images/menu.svg";

const TopBar = () => {
  const [stickyNav, setStickyNav] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const ref = React.useRef();
  //useOnClickOutside(ref, () => setIsMenuOpen(false));
  const handleScroll = React.useCallback(() => {
    if (window.scrollY > 0) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  }, []);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <nav
      className={`fixed bg-bgMain top-0 left-0 z-10 w-[100vw] flex justify-between items-center border-gray-100 py-2 pl-[27px] pr-[24px] md:px-[56px] h-[60px] lg:h-[96px] md:space-x-10 transition-all duration-700 ${
        stickyNav ? "backdrop-brightness-50" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full lg:justify-start lg:w-auto gap-10">
        <Link href="/" passHref>
          <a className="w-[65px] md:w-[110px]">
            <Image className="cursor-pointer" src={Logo} alt="Logo" />
          </a>
        </Link>
        <div className="hidden md:flex items-center gap-10 ">
          <span
            className={
              "text-sm whitespace-nowrap lg:inline-block cursor-pointer text-textMain"
            }
          >
            Overview
          </span>

          <span
            className={
              "text-sm whitespace-nowrap lg:inline-block cursor-pointer text-textMain"
            }
          >
            Feature Comparison
          </span>

          <span
            className={
              "text-sm whitespace-nowrap lg:inline-block cursor-pointer text-textMain"
            }
          >
            Feature Comparison
          </span>
        </div>

        <figure className="md:hidden">
          <Image
            src={Menu}
            alt="Menu Button"
            width={16}
            height={16}
            onClick={handleClick}
            className="cursor-pointer "
          />
        </figure>
      </div>
      <div
        className={`flex items-center lg:justify-end gap-x-4 flex-col lg:flex-row w-[70%] lg:w-full h-[100vh] lg:h-auto pt-32 lg:p-0 top-0 right-0 gap-4 absolute lg:static bg-white lg:bg-[transparent] p-4 z-10 lg:translate-x-0 transition-all duration-700 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="bg-white text-violet border-[1px] border-violet w-[172px] py-2 rounded-md uppercase text-sm font-semibold ">
          Schedule Demo
        </button>
        <button className="bg-violet text-white w-[172px] py-2 rounded-md uppercase text-sm font-semibold ">
          sign up for free
        </button>
      </div>
    </nav>
  );
};
export default TopBar;
