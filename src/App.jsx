import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Category from "@/views/category";
import KeyHighlights from "@/views/key-highlights";
import PortfolioLayout from "./layout/portfolio-layout";
import RootLayout from "./layout/root-layout";
import Portfolio from "@/views/portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Portfolio />} />
          <Route path="portfolio" element={<PortfolioLayout />}>
            <Route path="keyhighlights" element={<KeyHighlights />} />
            <Route path=":category" element={<Category />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
