import { useState } from "react";

interface MenuProps {
  className?: string;
}

const Menu = ({ className }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <span className="md:hidden">
      <button
        onClick={toggleMenu}
        className="absolute right-8 top-10 z-10 h-6 w-6"
      >
        {isOpen ? (
          <svg viewBox="0 0 80 80" width="24" height="24" fill="#533C96">
            <rect
              width="100"
              y="-5"
              x="5"
              height="10"
              transform="rotate(45)"
            ></rect>
            <rect
              y="50"
              x="-50"
              width="100"
              height="10"
              transform="rotate(-45)"
            ></rect>
          </svg>
        ) : (
          <svg viewBox="0 0 80 80" width="24" height="24" fill="#fff">
            <rect width="80" height="10"></rect>
            <rect y="30" width="80" height="10"></rect>
            <rect y="60" width="80" height="10"></rect>
          </svg>
        )}
      </button>
      <div
        className={`absolute inset-0 h-screen w-screen flex-col items-center justify-between bg-white pb-20 pt-12 
          ${isOpen ? "flex" : "hidden"}`}
      >
        <img
          src="/uxberries_long_purple.svg"
          alt="logo"
          width={150}
          height={23}
        />
        <ul className="flex flex-col justify-evenly gap-12 text-center text-4xl font-medium text-main-purple">
          <li>
            <a href="">O nas</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Kariera</a>
          </li>
        </ul>
        <div>
          <div className="mb-11">
            <a
              href=""
              className="rounded-[10px] border-[1.5px] border-hover bg-hover/20 px-[18px] py-[10px] text-base text-main-purple"
            >
              uxberries@gmail.com
              <img
                src="/arrow-right-up_purple.svg"
                alt="arrow"
                width="16"
                height="16"
                className="-mt-1 ml-[10px] inline-block h-4 w-4 align-middle"
              />
            </a>
          </div>
          <div className="flex justify-center gap-[50px]">
            <div className="h-10 w-10 bg-main-purple"></div>
            <div className="h-10 w-10 bg-main-purple"></div>
            <div className="h-10 w-10 bg-main-purple"></div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default Menu;
