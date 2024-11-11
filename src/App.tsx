
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WishesPage from './pages/WishesPage';  // Import the WishesPage component
import GiftRegistryPage from './pages/GiftRegistryPage';  // Import the GiftRegistryPage component
import BirthdayGames from './pages/BirthdayGames';  // Import the BirthdayGames component
import TicketPurchasePage from './pages/TicketPurchasePage';  // Import the TicketPurchasePage component

function App() {
  return (
    <Router basename="/julian">  {/* Set the base path to match GitHub Pages deployment */}
      <div className="app bg-blue-50 min-h-screen">
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/WishesPage" element={<WishesPage />} />
          <Route path="/GiftRegistryPage" element={<GiftRegistryPage />} />
          <Route path="/BirthdayGames" element={<BirthdayGames />} />
          <Route path="/TicketPurchasePage" element={<TicketPurchasePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
