import TicketItem from "@/app/components/ticket/ticketItem";

export default function BacklogBoard({ showfilter }) {
  return (
    <div className="w-full">
      {/* a menu bar includes Select all (text option, name of sprint with icon drop down, date, number of tickets with parentheness, the right side of menu bar includes three num represent number of 3 status of ticket, button that finishes sprint with label "complete sprint", and setting icon) */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="text-[#546FFF] text-[12px] font-[600]">Select all</p>
          <div className="flex items-center gap-2">
            <p className="text-black font-[600] text-[12px]">Backlog</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px]">Date: </span>
            <p className="text-[#2A3546FFFBB7] font-[600] text-[10px]">
              12/12/2021 - 12/12/2024
            </p>
          </div>
          <p className="text-[#546FFF] font-[600] text-[10px]">(10 tickets)</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[#546FFF] font-[600] text-[12px]">To do (3)</p>
          <p className="text-[#546FFF] font-[600] text-[12px]">
            In progress (2)
          </p>
          <p className="text-[#546FFF] font-[600] text-[12px]">Done (5)</p>
          <button className="bg-[#546FFF60] text-black rounded-[5px] px-4 py-[9px] text-[12px]">
            Complete sprint
          </button>
          <img
            src="/images/icons/icon_settings.svg"
            alt="mat anh roi"
            className="size-6"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-1">
        {Object.keys(Array.from({ length: 5 })).map((_, index) => (
          <TicketItem
            key={index}
            showfilter={showfilter}
            ticket={{
              id: "PM-14059112024",
              name: "Ticket title",
              type: index % 2 === 0 ? 1 : 2,
              epicName: "Epic name",
              assignee: "/images/avt.gif",
              status: index % 3 === 0 ? 1 : index % 3 === 1 ? 2 : 3,
            }}
          />
        ))}
      </div>
      <div className="mt-4 py-3 px-5 hover:bg-[#546FFF60] rounded-[5px] cursor-pointer w-fit">
        <p className="text-[12px] font-[700]">+ Create ticket</p>
      </div>
    </div>
  );
}
