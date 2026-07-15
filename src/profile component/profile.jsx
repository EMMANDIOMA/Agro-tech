import { ArrowLeft } from "lucide-react";
import { Main } from "./main";

export default function Profile() {
  return (
    <div className="min-h-screen px-7 py-5 flex flex-col gap-5 bg-[#fffdf5]">
      <div className="flex gap-3 items-center">
        <ArrowLeft />
        <h1 className="font-bold text-2xl">My Profile</h1>
      </div>
      <div className="w-3/5 mx-auto min-h-screen">
        <Main />
      </div>
    </div>
  );
}
