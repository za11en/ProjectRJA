import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Checkout from './components/Checkout';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);

  return (
    <>
      {currentView === AppView.LANDING && (
        <LandingPage 
          onEnter={() => setCurrentView(AppView.DASHBOARD)} 
          onCheckout={() => setCurrentView(AppView.CHECKOUT)}
        />
      )}
      {currentView === AppView.CHECKOUT && (
        <Checkout onBack={() => setCurrentView(AppView.LANDING)} />
      )}
      {(currentView !== AppView.LANDING && currentView !== AppView.CHECKOUT) && (
        <Dashboard 
          onLogout={() => setCurrentView(AppView.LANDING)} 
          onHome={() => setCurrentView(AppView.LANDING)}
        />
      )}
    </>
  );
};

export default App;
