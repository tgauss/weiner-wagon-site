/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Story } from "./pages/Story";
import { Menu } from "./pages/Menu";
import { Visit } from "./pages/Visit";
import { Catering } from "./pages/Catering";
import { Gallery } from "./pages/Gallery";
import { FAQ } from "./pages/FAQ";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="menu" element={<Menu />} />
          <Route path="visit" element={<Visit />} />
          <Route path="catering" element={<Catering />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

