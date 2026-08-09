import React from "react";
import Header from "./home/Header";
import StatsGrid from "./home/StatsGrid";
import QuickActions from "./home/QuickActions";
import InfoCards from "./home/InfoCards";
import RecentActivity from "./home/RecentActivity";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#fffdf5] pb-24">
      <Header />
      <StatsGrid />
      <QuickActions />
      <InfoCards />
      <RecentActivity />
    </main>
  );
};

export default Home;
