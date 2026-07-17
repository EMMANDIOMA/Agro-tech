import React from "react";
import { Sun } from "lucide-react";
import { Globe } from "lucide-react";
import { Bell } from "lucide-react";
import { CircleQuestionMark } from "lucide-react";
import { Lock } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { LogOut } from "lucide-react";
import Chart from "./Chart";
const Settings = () => {
  return (
    <>
      <div className="p-5 min-h-screen flex flex-col gap-8 bg-gray-100">
        <div className="flex gap-2 items-center text-2xl font-bold">
          <ArrowLeft />
          <h1>Settings</h1>
        </div>

        <div className="md:w-3/4 mx-auto flex flex-col gap-5 w-full">
          <Chart
            name={"Theme"}
            names={"Light mode"}
            icon={<Sun color="#008000" />}
          />
          <Chart
            name={"Language"}
            names={"English"}
            icon={<Globe color="#008000" strokeWidth={2.25} />}
          />
          <Chart
            name={"Notifications"}
            names={"Manage alerts"}
            icon={<Bell color="#008000" strokeWidth={2.25} />}
          />
          <Chart
            name={"Help & Support"}
            names={"FAQ and Contact us"}
            icon={<CircleQuestionMark color="#008000" strokeWidth={2.25} />}
          />
          <Chart
            name={"Privacy & Security"}
            names={"Manage your data"}
            icon={<Lock color="#008000" strokeWidth={2.25} />}
          />
          <button className="flex justify-center items-center text-white bg-amber-400 rounded-3xl p-3 my-2 hover:bg-amber-500">
            <LogOut color="#ffffff" strokeWidth={2.25} />
            Logout
          </button>
          <footer className="flex flex-col gap-2 rounded-3xl p-3 bg-green-100 justify-center items-center mb-7 shadow">
            <p className="text-gray-400">FarmLink</p>
            <p className="font-bold">Version 1.0.0</p>
            <p className="text-gray-400">Made with ❤️ for farmers</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Settings;
