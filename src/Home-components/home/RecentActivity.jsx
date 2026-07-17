import 'react';

const RecentActivity = () => {
  return (
    <div className="px-6 mt-10">
      <h2 className="text-xl font-bold text-[#2C2C2C] mb-4">Recent Activity</h2>
      <div className="space-y-4">
        <div className="p-5 bg-white rounded-3xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold">Tomatoes Sold</div>
              <div className="text-sm text-[#666666]">50kg • ₦12,500</div>
            </div>
            <div className="text-xs bg-[#E8F5E9] text-[#4CAF50] px-3 py-1 rounded-3xl font-medium">2h ago</div>
          </div>
        </div>

        <div className="p-5 bg-white rounded-3xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold">Job Completed</div>
              <div className="text-sm text-[#666666]">Harvest cassava • ₦5,000</div>
            </div>
            <div className="text-xs bg-[#E8F5E9] text-[#4CAF50] px-3 py-1 rounded-3xl font-medium">1d ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;