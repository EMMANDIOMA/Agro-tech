import 'react';

const InfoCards = () => {
  return (
    <div className="px-6 mt-6 space-y-4">
      {/* Weather */}
      <div className="p-5 bg-[#E8F5E9] rounded-3xl flex gap-4">
        <div className="mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4CAF50]">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        </div>
        <div>
          <div className="font-semibold text-[#2C2C2C]">Sunny Weather Today</div>
          <div className="text-sm text-[#666666]">Perfect for planting</div>
        </div>
      </div>

      {/* Price Update */}
      <div className="p-5 bg-[#E8F5E9] rounded-3xl flex gap-4">
        <div className="mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4CAF50]">
            <path d="M16 7h6v6" />
            <path d="m22 7-8.5 8.5-5-5L2 17" />
          </svg>
        </div>
        <div>
          <div className="font-semibold text-[#2C2C2C]">Maize Price Up 5%</div>
          <div className="text-sm text-[#666666]">Now ₦8,500/50kg</div>
        </div>
      </div>

      {/* New Order */}
      <div className="p-5 bg-[#E8F5E9] rounded-3xl flex gap-4">
        <div className="mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <div>
          <div className="font-semibold text-[#2C2C2C]">New Order Received</div>
          <div className="text-sm text-[#666666]">50kg of tomatoes ordered</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;