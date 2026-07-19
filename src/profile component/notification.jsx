import { IoArrowBackOutline } from "react-icons/io5";
import AlertCard from "../components/AlertCard";
import { FiShoppingCart } from "react-icons/fi";
import { FaCheck, FaMoneyBillAlt } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";

const alerts = [
  {
    title: "New Order Received",
    message: "Someone ordered 50kg of tomates from your produce.",
    time: "2 hours ago",
    icon: FiShoppingCart,
    unread: true,
  },
  {
    title: "Job Approved",
    message: "Your harvest cassava job was approved.#15,000  released.",
    time: "5 hours ago",
    icon: FaCheck,
    unread: true,
  },
  {
    title: "Funds Released",
    message: "Payment for sold tomates has been released to your.",
    time: "1 day ago",
    icon: FaMoneyBillAlt,
    unread: true,
  },
  {
    title: "Weather Alert",
    message: "Rain expected tomorrow.Best day for planting maize",
    time: "2 days ago",
    icon: IoSunnyOutline,
    unread: false,
  },
  {
    title: "Market Place Update",
    message: "Maize price increased by 5% to #8,500 per 50kg.",
    time: "3 days ago",
    icon: HiOutlineChartBar,
    unread: false,
  },
];

function Notification() {
  return (
    <div className="min-h-screen bg-[#FEFDF5]">
      {/*Header*/}
      <header className="sticky top-0 bg-[#FEFDF5] border-b border-gray-200">
        <div className="max-w-3xl mx-auto flex items-center gap-4 px-6 py-5">
          <button className="text-3xl">
            <IoArrowBackOutline />
          </button>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Notification
          </h1>
        </div>
      </header>
      {/*Notifications*/}
      <main className="max-w-3xl mx-auto px-5 py-8">
        {alerts.map((alert, index) => (
          <AlertCard
            key={index}
            title={alert.title}
            message={alert.message}
            time={alert.time}
            icon={alert.icon}
            unread={alert.unread}
          />
        ))}
      </main>
    </div>
  );
}
export default Notification;
