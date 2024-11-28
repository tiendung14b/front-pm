import Select from "../ui/select";

export default function TicketItem({ ticket, showfilter }) {
  // ticket has checkbox, ticket id, ticket name, ticket type, epic name, selection of status (to do, in progress, done), assignee and options with three dots
  const hashType = {
    1: "/images/icons/icon_type_task.svg",
    2: "/images/icons/icon_type_bug.svg",
    3: "Story",
    4: "Epic",
  };
  return (
    <div className="flex items-center justify-between gap-4 border-b-[1px] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.10)] bg-white rounded-[5px] py-1 px-4 w-full">
      <div className="flex gap-6 items-center">
        <input
          type="checkbox"
          className={`size-4 ${showfilter?.selection_box ? "block" : "hidden"}`}
        />
        <p
          className={`text-[#2A3BB7] font-[600] text-[12px] ${
            showfilter?.ticket_id ? "block" : "hidden"
          }`}
        >
          {ticket.id}
        </p>
        <p className="text-black text-[12px]">{ticket.name}</p>
        <img
          src={hashType[ticket.type]}
          className={`size-5 object-cover ${
            showfilter?.ticket_type ? "block" : "hidden"
          }`}
          alt="mat anh roi"
        />
      </div>
      <div className="flex gap-7 items-center">
        <div
          className={`py-1 px-2 bg-[#ED7F7F4D] mr-12 rounded-[3px] font-[600] ${
            showfilter?.epic_name ? "block" : "hidden"
          }`}
        >
          <p className="text-[#00000090] text-[12px]">{ticket.epicName}</p>
        </div>
        <div
          className={`min-w-[200px] ${showfilter?.status ? "block" : "hidden"}`}
        >
          <Select
            publishingOptions={[
              {
                title: "To do",
                description:
                  "This job posting can be viewed by anyone who has the link.",
                current: ticket.status === 1,
                status: 1,
              },
              {
                title: "In progress",
                description:
                  "This job posting will no longer be publicly accessible.",
                current: ticket.status === 2,
                status: 2,
              },
              {
                title: "Done",
                description:
                  "This job posting will no longer be publicly accessible.",
                current: ticket.status === 3,
                status: 3,
              },
            ]}
          />
        </div>
        <div className="flex gap-5 items-center">
          <img
            src={ticket.assignee}
            alt="mat anh roi"
            className={`size-10 rounded-full ${
              showfilter?.assignee ? "block" : "hidden"
            }`}
          />
          <img
            className=""
            src="/images/icons/icon_horizontal_three_dots.svg"
            alt="mat anh roi"
          />
        </div>
      </div>
    </div>
  );
}
