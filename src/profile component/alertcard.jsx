function AlertCard({ title, message, time, icon: Icon, unread }) {
  return (
    <div
      ClassName={`flex items-start
         justify-between rounded-3xl p-5
          shadow-sm mb-5transistion-all
          duration-300 hover:shadow-lg
          ${unread ? "bg-green-50 border-2 border-green-500" : "bg-white"}`}
    >
      {/*Left Section*/}
      <div className="flex gap-4">
        {/*Icon*/}
        <div className="text-4xl text-green-600 mt-1">
          <Icon />
        </div>
        {/*Text*/}
        <div>
          <h2 className="md:text-xl font-bold text-lg text-gray-800">
            {title}
          </h2>
          <p className="text-gray-500 mt-2 leading-relaxing">{message}</p>
          <p className="text-gray-400 text-sm mt-4">{time}</p>
        </div>
      </div>
      {/*Green Dot*/}
      {unread && <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>}
    </div>
  );
}
export default AlertCard;
