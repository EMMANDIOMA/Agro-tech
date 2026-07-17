import 'react';

const QuickActions = () => {
  return (
    <div className="px-6 mt-10 space-y-3">
      <button className="w-full p-5 bg-white rounded-3xl shadow-sm hover:shadow-md active:scale-[0.985] transition-all flex items-center justify-between group">
        <span className="font-semibold text-[#2C2C2C]">Browse Marketplace</span>
        <span className="text-3xl group-active:rotate-12 transition-transform">🛒</span>
      </button>

      <button className="w-full p-5 bg-white rounded-3xl shadow-sm hover:shadow-md active:scale-[0.985] transition-all flex items-center justify-between group">
        <span className="font-semibold text-[#2C2C2C]">Ask AI Assistant</span>
        <span className="text-3xl">🤖</span>
      </button>

      <button className="w-full p-5 bg-white rounded-3xl shadow-sm hover:shadow-md active:scale-[0.985] transition-all flex items-center justify-between group">
        <span className="font-semibold text-[#2C2C2C]">Messages</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-[#4CAF50]"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </div>
  );
};

export default QuickActions;