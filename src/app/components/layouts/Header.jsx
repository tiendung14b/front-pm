"use client";

import CreateTicketBox from "@components/ticket/createTicketBox";

export default function Header() {
  return (
    <header className="flex items-center gap-8 py-4 border-b-[1px] border-gray-400 px-7 sticky top-0 left-0 w-full bg-white z-50">
      <img src="/images/icons/icon_app_menu.svg" alt="dcuy" />
      <p className="text-[24px] font-[600]">
        <span className="text-[#E54949]">Pm</span>ify
      </p>
      <ul className="flex *:px-4 *:py-2 *:gap-2 gap-8 hover:*:bg-[#2A60B715] hover:*:text-[#2A3BB7] *:font-[600] *:transition-all *:duration-400">
        <li className="flex items-center">
          <span>Workspace</span>
          <img src="/images/icons/icon_arrow_down.svg" alt="mat anh roi" />
        </li>
        <li className="flex items-center">
          <span>Projects</span>
          <img src="/images/icons/icon_arrow_down.svg" alt="mat anh roi" />
        </li>
        <li className="flex items-center">
          <span>My Works</span>
          <img src="/images/icons/icon_arrow_down.svg" alt="mat anh roi" />
        </li>
      </ul>
      <CreateTicketBox />
      <div className="flex gap-4 ml-auto">
        <img src="/images/icons/icon_notification.svg" alt="mot cai chuong" />
        <img
          src="/images/avt.gif"
          alt="mot cai anh dai dien"
          className="size-10 rounded-full"
        />
      </div>
    </header>
  );
}
