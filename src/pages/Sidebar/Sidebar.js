import React, { useState } from "react";
import {
  MdOutlineDashboard,
  MdOutlineEmail,
  MdCalendarMonth,
  MdOutlineSecurity,
  MdOutlineSettings,
} from "react-icons/md";
import { BsChat, BsDashLg } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { PiUsersThin, PiNote, PiRectangleBold } from "react-icons/pi";
import { ImPagebreak } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dashboard } from "../Dashboard";
import { Email } from "../Email";
import { Calendar } from "../Calendar";
import { Chat } from "../Chat";

const Buttons = ({ label, onClick, arrow, icons, sidebar }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 hover:bg-gray-800 p-2 rounded-md"
    >
      <i className="text-2xl" id="menulink">
        {icons}
      </i>
      {sidebar ? (
        <div className="flex items-center justify-between w-full">
        {label} {arrow}
      </div>
      ) : (
        ""
      )}
    </button>
  );
};

const Content = ({ activeContent }) => {
  return (
    <div>
      {activeContent === 1 && <Dashboard />}
      {activeContent === 2 && <Email />}
      {activeContent === 3 && <Chat />}
      {activeContent === 4 && <Calendar />}
    </div>
  );
};

export const Sidebar = () => {
  const [activeContent, setActiveContent] = useState(1);
  const [activeSidebar, setActiveSidebar] = useState(false);

  const isSideBarActive = () => {
    setActiveSidebar(!activeSidebar);
  };
  const changeContent = (contentNumber) => {
    setActiveContent(contentNumber);
  };
  const menus = [
    {
      name: "Email",
      link: 2,
      icon: <MdOutlineEmail />,
      arrow: "",
      children: [],
    },
    { name: "Chat", link: 3, icon: <BsChat />, arrow: "", children: [] },
    {
      name: "Calendar",
      link: 4,
      icon: <MdCalendarMonth />,
      arrow: <IoIosArrowForward />,
      children: [],
    },
    {
      name: "Invoice",
      link: 5,
      icon: <LiaFileInvoiceDollarSolid />,
      arrow: <IoIosArrowForward />,
      children: [
        { title: "List" },
        { title: "Preview" },
        { title: "Edit" },
        { title: "Add" },
      ],
    },
    {
      name: "User",
      link: 6,
      icon: <PiUsersThin />,
      arrow: <IoIosArrowForward />,
      children: [],
    },
    {
      name: "Roles & Permission",
      link: 7,
      icon: <MdOutlineSettings />,
      arrow: <IoIosArrowForward />,
      children: [],
    },
    {
      name: "Pages",
      link: 8,
      icon: <PiNote />,
      arrow: <IoIosArrowForward />,
      children: [],
    },
    {
      name: "Authentication",
      link: 9,
      icon: <MdOutlineSecurity />,
      arrow: <IoIosArrowForward />,
      children: [],
    },
    {
      name: "Wizard Examples",
      link: 10,
      icon: <ImPagebreak />,
      arrow: <IoIosArrowForward />,
      children: [],
    },
    {
      name: "Dialog Examples",
      link: 11,
      icon: <PiRectangleBold />,
      arrow: <IoIosArrowForward />,
      children: [],
    },
  ];

  return (
    <section className="flex">
      <div
        className={
          !activeSidebar
            ? "w-20  bg-gray-900 min-h-screen  text-gray-200 border-gray-500 border-r-[1px]"
            : "basis-[22%] bg-gray-900 min-h-screen  text-gray-200 px-7 border-gray-500 border-r-[1px] "
        }
      >
        <div className="py-3 flex justify-center items-center">
          {!activeSidebar ? (
            <RxHamburgerMenu
              size={22}
              className="cursor-pointer"
              onClick={() => isSideBarActive()}
            />
          ) : (
            <div className="flex justify-between items-center w-full">
              <h1 className="text-3xl">Vuexy</h1>
              <RxHamburgerMenu
                size={22}
                className="cursor-pointer"
                onClick={() => isSideBarActive()}
              />
            </div>
          )}
        </div>

        <div>
          <Buttons
            label={"Dashboard"}
            onClick={() => changeContent(1)}
            arrow={<IoIosArrowForward/>}
            icons={<MdOutlineDashboard/>}
            sidebar={activeSidebar}
          />
        </div>

        {!activeSidebar ? (
          <p className="flex justify-center text-2xl">
            <BsDashLg />
          </p>
        ) : (
          <p className="mt-4 text-sm">APPS & PAGES</p>
        )}

        <div className="mt-4 flex flex-col gap-2 relative">
          {menus?.map((menu, i) => (
            <div key={i}>
              <div>
                <Buttons
                  label={menu.name}
                  onClick={() => changeContent(menu.link)}
                  arrow={menu.arrow}
                  icons={menu.icon}
                  sidebar={activeSidebar}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className=" basis-full relative   bg-gray-900 h-screen p-5 overflow-y-auto ">
        <Content activeContent={activeContent} />
      </div>
    </section>
  );
};
