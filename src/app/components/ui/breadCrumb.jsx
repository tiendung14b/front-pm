export default function BreadCrumb({ items }) {
  return (
    <div className="text-[14px] text-[#00000060] font-[600]">
      <a href="/">Home {" / "}</a>
      {items.map((item, index) => {
        return (
          <a href={item.url} key={index}>
            {item.label} {index < items.length - 1 && " / "}
          </a>
        );
      })}
    </div>
  );
}
