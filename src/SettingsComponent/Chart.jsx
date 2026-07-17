import React from "react";

import { MoveRight } from "lucide-react";
const Chart = ({name, names, icon}) => {
  return (
    <div className="flex justify-between p-4 rounded-3xl bg-white shadow items-center" >
      <div className="flex items-center gap-2">
        <div>
          {icon}
        </div>
        <div>
          <h1 className="font-bold text-xl">{name} </h1>
          <p className="text-gray-400">{names} </p>
        </div>
      </div>
      <div>
        <MoveRight color="#808080" strokeWidth={2.25} />
      </div>
    </div>
  );
};

export default Chart;
