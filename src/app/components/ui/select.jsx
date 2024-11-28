"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

// const publishingOptions = [
//   {
//     title: "Published",
//     description: "This job posting can be viewed by anyone who has the link.",
//     current: true,
//   },
//   {
//     title: "Draft",
//     description: "This job posting will no longer be publicly accessible.",
//     current: false,
//   },
// ];

export default function Select({ publishingOptions }) {
  const [selected, setSelected] = useState(
    publishingOptions.find((option) => option.current)
  );
  const hashColorStatus = {
    1: "bg-[#D9D9D9] text-black",
    2: "bg-[#546FFF33] text-black",
    3: "bg-[#ED7F7F4D] text-black",
  };

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="sr-only">Change published status</Label>
      <div className="relative">
        <div className="inline-flex divide-x divide-gray-500 rounded-md shadow-sm">
          <div
            className={`inline-flex items-center gap-x-1.5 rounded-l-md ${
              hashColorStatus[selected.status]
            } px-3 py-2 shadow-sm`}
          >
            <p className="text-sm font-semibold">{selected.title}</p>
          </div>
          <ListboxButton
            className={`inline-flex items-center rounded-l-none rounded-r-md ${
              hashColorStatus[selected.status]
            } p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50`}
          >
            <span className="sr-only">Change published status</span>
            <ChevronDownIcon aria-hidden="true" className="size-5 text-black" />
          </ListboxButton>
        </div>

        <ListboxOptions
          transition
          className="absolute right-0 z-50 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
        >
          {publishingOptions.map((option) => (
            <ListboxOption
              key={option.title}
              value={option}
              className="group cursor-default select-none p-4 text-sm text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="font-normal group-data-[selected]:font-semibold text-[12px]">
                    {option.title}
                  </p>
                  <span className="text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="size-5" />
                  </span>
                </div>
                <p className=" text-gray-500 group-data-[focus]:text-indigo-200 text-[10px]">
                  {option.description}
                </p>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
