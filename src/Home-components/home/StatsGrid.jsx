import 'react';

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 mt-10 gap-4 px-6">
      <button className="p-6 bg-white rounded-3xl shadow-sm hover:shadow-md active:scale-[0.985] transition-all text-left">
        <div className="text-3xl font-bold text-[#2C2C2C]">12</div>
        <div className="text-sm mt-1 font-medium text-[#999999]">My Produce</div>
      </button>

      <button className="p-6 bg-white rounded-3xl shadow-sm hover:shadow-md active:scale-[0.985] transition-all text-left">
        <div className="text-3xl font-bold text-[#2C2C2C]">8</div>
        <div className="text-sm mt-1 font-medium text-[#999999]">Orders</div>
      </button>

      <button className="p-6 bg-white rounded-3xl shadow-sm hover:shadow-md active:scale-[0.985] transition-all text-left">
        <div className="text-3xl font-bold text-[#2C2C2C]">3</div>
        <div className="text-sm mt-1 font-medium text-[#999999]">Jobs</div>
      </button>

      <button className="p-6 bg-white rounded-3xl shadow-sm hover:shadow-md active:scale-[0.985] transition-all text-left">
        <div className="text-3xl font-bold text-[#4CAF50]">₦25K</div>
        <div className="text-sm mt-1 font-medium text-[#999999]">Wallet</div>
      </button>
    </div>
  );
};

export default StatsGrid;