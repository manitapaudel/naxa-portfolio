import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Portfoliio from "@/views/portfolio";
import KeyHighlights from "@/views/key-highlights";
import Header from "@/components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Portfoliio />} />
        <Route path="/keyhighlights" element={<KeyHighlights />} />
      </Routes>
    </Router>
  );
}

export default App;
