import { StatGrid } from "./stat-grid";

export function Stat() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-xl">Statistics</h1>
      <div className="grid grid-cols-2 gap-3">
        <StatGrid
          name={"47"}
          detail={"Products Sold"}
          textsize={"text-2xl"}
          textcolor={"text-[#c4ccbd]"}
          parasize={"te"}
        />
        <StatGrid
          name={"12"}
          detail={"Jobs Completed"}
          textsize={"text-2xl"}
          textcolor={"text-[#c4ccbd]"}
        />
        <StatGrid
          name={"₦145K"}
          detail={"Total Earned"}
          textsize={"text-2xl"}
          textcolor={"text-[#c4ccbd]"}
        />
        <StatGrid
          name={"98%"}
          detail={"Completion rate"}
          textsize={"text-2xl"}
          textcolor={"text-[#c4ccbd]"}
        />
      </div>
    </div>
  );
}
