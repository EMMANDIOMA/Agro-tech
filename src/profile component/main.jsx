import { Star } from "lucide-react";
import { FarmDetails } from "./farm-details";
import { Stat } from "./stat";
import { Achievement } from "./achievement";

export function Main() {
  return (
    <div className="p-5 flex flex-col gap-5 ">
      {/* name/reviews */}
      <div className="bg-[#ffffff] shadow p-5 rounded-3xl items-center">
        <div className=" rounded-md flex items-center gap-4 pb-2">
          <img
            src="./src/assets/cute farmer.jpg"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <p className="font-bold text-2xl">Emmanuel Okonkwo</p>
            <p className="text-gray-500">Verified Farmer</p>
          </div>
        </div>
        <hr className="text-[#e5e5e5]" />
        <div className="flex gap-3 pt-3 items-center">
          <Star className="w-5 h-5" />
          <Star className="w-5 h-5" />
          <Star className="w-5 h-5" />
          <Star className="w-5 h-5" />
          <Star className="w-5 h-5 text-[#c4ccbd]" />
          <p>
            4.8 <span className="text-gray-400">(127 reviews)</span>
          </p>
        </div>
      </div>
      {/* farm details */}
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Farm Details</h1>
        <div className="p-5 flex flex-col gap-3 bg-[#ffffff] rounded-3xl shadow">
          <FarmDetails name={"Farm Name"} detail={"Okonkwo's Green Farm"} />
          <FarmDetails name={"Location"} detail={"Lagos, Nigeria"} />
          <hr className="text-[#e5e5e5]" />
          <FarmDetails name={"Farm Size"} detail={"5 hectares"} />
          <hr className="text-[#e5e5e5]" />
          <FarmDetails name={"Main Crop"} detail={"Tomato, Maize, Cassava"} />
        </div>
      </div>
      {/* statistics */}
      <Stat />
      <button className="bg-green-600 p-3 text-white rounded-3xl hover:bg-green-500 font-medium">
        Edit Profile
      </button>
      <Achievement />
    </div>
  );
}
