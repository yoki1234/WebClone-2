import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpaceXIndex from "./space-x/SpaceXIndex";
import HomePage from "./HomePage";
import { navbarData } from "./space-x/src/data";
import Navbar from "./space-x/src/container/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/space-x" element={<SpaceXIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
