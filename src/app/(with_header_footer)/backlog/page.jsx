import BreadCrumb from "@components/ui/breadCrumb";
import SprintBoard from "@components/backlog/sprintBoard";
import BacklogBoard from "@components/backlog/backlogBoard";
import CreateTicketBox from "@/app/components/ticket/createTicketBox";

export default function Backlog() {
  let members = [
    { name: "Nguyen Van A", avatar: "/images/avt.gif" },
    { name: "Nguyen Van B", avatar: "/images/avt2.webp" },
    { name: "Nguyen Van C", avatar: "/images/avt3.gif" },
  ];
  return (
    <div className="w-full overflow-y-auto pr-7">
      <BreadCrumb items={[{ label: "Backlog", url: "#" }]} />
      <h1 className="text-[20px] font-[600] text-black">Backlog</h1>
      <div className="pt-4">
        <div className="flex">
          {members.map((member, index) => {
            return (
              <img
                src={`${member.avatar}`}
                alt=""
                title={member.name}
                className={`size-[38px] p-[2px] bg-white ${
                  index < members.length - 1 && " -mr-3"
                } rounded-full object-cover `}
              />
            );
          })}
          <img
            src="/images/icons/icon_add_user.svg"
            alt="meow"
            className="size-[36px] rounded-full bg-[#D9D9D9] p-[6px] ml-2"
          />
        </div>
        {/* main content */}
        <div className="mt-4 w-full flex flex-col gap-5">
          <SprintBoard />
          <BacklogBoard />
        </div>
      </div>
    </div>
  );
}
