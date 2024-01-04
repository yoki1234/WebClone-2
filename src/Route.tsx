import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpaceXIndex from "./space-x/SpaceXIndex";
import HomePage from "./HomePage";
// import { navbarData } from "./space-x/src/data";
// import Navbar from "./space-x/src/container/Navbar";
// import BannerButton from "./space-x/src/components/BannerButton";
import CTAbanner from "./space-x/src/container/CTAbanner";

function RoutePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/space-x" element={<SpaceXIndex />} />
        <Route path="/test" element={<CTAbanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutePage;
