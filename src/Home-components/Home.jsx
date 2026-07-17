import'react';
import Header from './Home-components/home/Header.js';
import StatsGrid from './Home-components/home/StatsGrid.js';
import QuickActions from './Home-components/home/QuickActions.js';
import InfoCards from './Home-components/home/InfoCards.js';
import RecentActivity from './Home-components/home/RecentActivity.js';

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