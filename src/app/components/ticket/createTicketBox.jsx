"use client";

import { CreateButton } from "@components/ui/createButton";
import { useState } from "react";
import SelectWithImage from "../ui/selectWithImage";
import Select from "@components/ui/select";
import SelectWithoutImage from "@components/ui/selectWithoutImage";
import CancelButton from "@components/ui/cancelButton";

export default function CreateTicketBox() {
  const [isOpen, setIsOpen] = useState(false);

  useState(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.localeCompare("Escape") === 0) {
        console.log(e.key);
        setIsOpen(false);
      }
    });
  }, []);

  return isOpen ? (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#00000060] z-50 transition-all pb-4">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-8 bg-white h-[70vh] overflow-y-auto shadow-sm rounded-lg w-[536px]">
        <div className="relative flex flex-col">
          <img
            src="/images/icons/icon_close.svg"
            alt="meow"
            className="absolute top-0 right-0 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <strong className="text-[20px] font-[600]">Create ticket</strong>
          <em className="text-[12px] font-[400] mt-7">
            Required fields are marked with an asterisk 
            <span className="text-red-500">*</span>
          </em>
          <div className="flex flex-col gap-6 mt-6">
            <div>
              <SelectWithImage
                data={[
                  { name: "My project", avatar: "/images/avt.gif" },
                  { name: "My project 2", avatar: "/images/avt2.webp" },
                  { name: "My project 3", avatar: "/images/avt3.gif" },
                ]}
                label="Project"
                mark={true}
              />
            </div>
            <div>
              <SelectWithImage
                data={[
                  { name: "Task", avatar: "/images/icons/icon_type_task.svg" },
                  { name: "Bug", avatar: "/images/icons/icon_type_bug.svg" },
                  { name: "Them option sau", avatar: "/images/avt3.gif" },
                ]}
                label="Type"
                mark={true}
              />
            </div>
            <hr className="bg-black mt-5" />
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[12px] font-[600]">
                Status{" "}
                <span className="text-red-500 text-[12px] font-[600]">*</span>
              </label>
              <Select
                publishingOptions={[
                  {
                    title: "Todo",
                    status: 1,
                    description: "Todo",
                    current: true,
                  },
                  {
                    title: "In progress",
                    status: 2,
                    description: "In progress",
                    current: false,
                  },
                  {
                    title: "Done",
                    status: 3,
                    description: "Done",
                    current: false,
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[12px] font-[600]">
                Summarize{" "}
                <span className="text-red-500 text-[12px] font-[600]">*</span>
              </label>
              <input
                type="text"
                className="border-[1px] border-[#D9D9D9] rounded-[2px] py-2 px-3 outline-none text-[12px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[12px] font-[600]">
                Description{" "}
              </label>
              <textarea
                rows={5}
                maxLength={500}
                type="text"
                className="border-[1px] border-[#D9D9D9] rounded-[2px] py-2 px-3 outline-none text-[12px]"
              />
            </div>
            {/* Asignee member */}
            <div>
              <SelectWithImage
                data={[
                  { name: "Pham Minh", avatar: "/images/avt.gif" },
                  { name: "Nguyen Van A", avatar: "/images/avt2.webp" },
                  { name: "Tran Van B", avatar: "/images/avt3.gif" },
                ]}
                label="Assignee"
                mark={false}
              />
              {/* assign to me */}
              <p className="text-[11px] font-[600] text-[#546FFF] ml-0.5">
                Assign to me
              </p>
            </div>
            {/* Select parent */}
            <div>
              <SelectWithoutImage
                data={[
                  { name: "Pham Minh a" },
                  { name: "Nguyen Van Ab" },
                  { name: "Tran Van Bc" },
                ]}
                label="Parent"
                mark={true}
              />
            </div>
            {/* Sprint */}
            <div>
              <SelectWithoutImage
                data={[
                  { name: "Sprint 1" },
                  { name: "Sprint 2" },
                  { name: "Sprint 3" },
                ]}
                label="Sprint"
              />
            </div>
            {/* Reporter */}
            <div>
              <SelectWithImage
                data={[
                  { name: "Pham Minh a", avatar: "/images/avt.gif" },
                  { name: "Nguyen Van Ab", avatar: "/images/avt2.webp" },
                  { name: "Tran Van Bc", avatar: "/images/avt3.gif" },
                ]}
                label="Reporter"
                mark={false}
              />
            </div>
            {/* linked tickets */}
            <div>
              <div>
                <SelectWithoutImage
                  data={[
                    { name: "blocks" },
                    { name: "is blocked by" },
                    { name: "relates to" },
                  ]}
                  label="Linked tickets"
                />
              </div>
              <div>
                <SelectWithoutImage
                  data={[
                    { name: "PM-14059112024" },
                    { name: "PM-14059112025" },
                    { name: "PM-14059112026" },
                  ]}
                />
              </div>
            </div>
            {/* restricted to (viewer, members, admin) */}
            <div>
              <SelectWithoutImage
                data={[
                  { name: "Viewer" },
                  { name: "Members" },
                  { name: "Admin" },
                ]}
                label="Restricted to"
              />
            </div>
            <div className="fixed -top-[1000px]">
              <SelectWithImage
                data={[
                  { name: "Pham Minh a", avatar: "/images/avt.gif" },
                  { name: "Nguyen Van Ab", avatar: "/images/avt2.webp" },
                  { name: "Tran Van Bc", avatar: "/images/avt3.gif" },
                ]}
                label="Reporter"
                mark={true}
              />
            </div>
            <hr className="bg-black mt-5" />
            <div className="flex ml-auto gap-2">
              <CancelButton
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </CancelButton>
              <CreateButton>Create ticket</CreateButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <CreateButton onClick={() => setIsOpen(true)}>Create</CreateButton>
  );
}
