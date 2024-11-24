"use client";
export function CreateButton({ children, onClick }) {
  return (
    <button
      className="text-[14px] text-white bg-[#546FFF] px-6 py-2 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
