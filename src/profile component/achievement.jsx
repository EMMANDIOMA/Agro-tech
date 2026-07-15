import { StatGrid } from "./stat-grid";
export function Achievement() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-xl">Achievements</h1>
      <div className="grid grid-cols-2 gap-3 text-center">
        <StatGrid
          name={"🌟"}
          detail="Top Seller"
          textsize={"text-3xl"}
          parasize={"text-sm"}
          font={"font-medium"}
        />
        <StatGrid
          name={"👍"}
          detail={"Trusted Worker"}
          textsize={"text-3xl"}
          parasize={"text-sm"}
          font={"font-medium"}
        />
        <StatGrid
          name={"🎯"}
          detail={"Quick Responder"}
          textsize={"text-3xl"}
          parasize={"text-sm"}
          font={"font-medium"}
        />
        <StatGrid
          name={"📊"}
          detail={"High Quality"}
          textsize={"text-3xl"}
          parasize={"text-sm"}
          font={"font-medium"}
        />
      </div>
    </div>
  );
}
