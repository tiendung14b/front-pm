"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isShow, setIsShow] = useState(true);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="relative w-fit">
      <div
        className={`absolute right-0 translate-x-1/2 bg-white p-[2px] rounded-full top-[30px] ${
          !isShow && "rotate-180"
        }`}
        onClick={handleShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.26 15.53L9.73999 12L13.26 8.47"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`flex flex-col pt-5 gap-5 overflow-hidden ${
          !isShow ? "w-0" : "w-[244px]"
        } h-[100vh] border-r-[2px] border-gray-300 transition-all`}
      >
        <div className="flex items-center gap-3 py-2">
          <img
            src="/images/project_image.png"
            alt="anh project"
            className="size-8 object-cover rounded-full"
          />
          <div className="">
            <p className="text-[14px] text-[#8E92BC] font-[600]">
              Project name
            </p>
            <p className="text-[9px] text-[#8E92BC] font-[600]">
              Workspace name
            </p>
          </div>
        </div>
        <span className="text-[12px] font-[600] text-black uppercase">
          Planning
        </span>
        <ul className="flex flex-col gap-6 *:gap-2 *:items-center *:px-[20px] *:py-[10px] *:text-[14px] *:text-[#8E92BC] *:font-[600] transition-all">
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5.48999V20.49"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.75 8.48999H5.5"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 11.49H5.5"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Board</span>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.01 19.99C16.34 21.25 14.25 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M22 12C22 13.82 21.51 15.53 20.66 17M6.03 3.97C7.69 2.73 9.75 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56M2 12C2 10.18 2.48 8.47 3.33 7"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Backlog</span>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 12.2H15"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 16.2H12.38"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 4.02C19.33 4.2 21 5.43 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44 4.67 4.2 8 4.02"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Issues</span>
          </li>
        </ul>
        <span className="text-[12px] font-[600] text-black uppercase">
          Settings
        </span>
        <ul className="flex flex-col gap-6 *:gap-2 *:items-center *:px-[20px] *:py-[10px] *:text-[14px] *:text-[#8E92BC] *:font-[600]">
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.6801 3.96C13.1601 4.67 13.4401 5.52 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Members</span>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.05005 11.87L10.66 13.48L14.96 9.18"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.59 7.12C20.59 5.89 19.65 4.53 18.5 4.1L13.51 2.23C12.68 1.92 11.32 1.92 10.49 2.23L5.50003 4.11C4.35003 4.54 3.41003 5.9 3.41003 7.12V14.55C3.41003 15.73 4.19003 17.28 5.14003 17.99L9.44003 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V11.03"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Role & Access</span>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z"
                stroke="#8E92BC"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Project settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
