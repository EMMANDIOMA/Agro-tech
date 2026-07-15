export function StatGrid({name, detail, textsize, textcolor, parasize, font}) {
  return (
    <div className="bg-[#e8f5e9] p-4 rounded-4xl flex flex-col ">
      <p className={`font-bold  text-[#4caf50] ${textsize}`}>{name}</p>
      <p className={`${textcolor} ${parasize} ${font}`}>{detail}</p>
    </div>
  );
}
