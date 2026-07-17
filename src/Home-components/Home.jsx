import'react';
import Header from './Home-components/home/Header.jsx';
import StatsGrid from './Home-components/home/StatsGrid.jsx';
import QuickActions from './Home-components/home/QuickActions.jsx';
import InfoCards from './Home-components/home/InfoCards.jsx';
import RecentActivity from './Home-components/home/RecentActivity.jsx';

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