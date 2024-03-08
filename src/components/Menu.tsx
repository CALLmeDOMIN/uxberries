import { useState } from "react";

const Menu = () => {
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
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="absolute right-8 top-10 z-20 h-6 w-6"
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
        className={`absolute inset-0 z-10  flex h-screen w-screen flex-col items-center justify-between bg-white pb-20 pt-12 transition-all ease-in-out
          ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <img
          src="/uxberries_long_purple.svg"
          alt="logo"
          width={150}
          height={23}
        />
        <ul className="flex flex-col justify-evenly gap-12 text-center text-4xl font-medium text-main-purple">
          <li>
            <a href="#o-nas">O nas</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
        <div>
          <div className="mb-11">
            <a
              href="mailto:uxberries@gmail.com"
              className="rounded-[10px] border-[1.5px] border-hover bg-hover/20 px-[18px] py-[10px] text-base text-main-purple"
              title="Napisz do nas!"
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
            <a
              href="https://www.facebook.com/UXberries/"
              title="Facebook"
              target="_blank"
            >
              <img
                src="/facebook_purple.svg"
                alt="facebook"
                width="36"
                height="36"
              />
            </a>
            <a
              href="https://www.behance.net/uxberries"
              title="Behance"
              target="_blank"
            >
              <img
                src="/behance_purple.svg"
                alt="behance"
                width="36"
                height="36"
              />
            </a>
            <a
              href="https://pl.linkedin.com/company/uxberries"
              className="py-[1px]"
              title="LinkedIn"
              target="_blank"
            >
              <img
                src="/linkedin_purple.svg"
                alt="linkedin"
                width="34"
                height="34"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
