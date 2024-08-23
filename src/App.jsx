import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Category from "@/views/category";
import Portfolio from "@/views/portfolio";
import KeyHighlights from "@/views/key-highlights";
import Header from "@/components/Header";
import PageLayout from "./layout/page-layout";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route element={<PageLayout />}>
          <Route path="/keyhighlights" element={<KeyHighlights />} />
          <Route path=":category" element={<Category />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
