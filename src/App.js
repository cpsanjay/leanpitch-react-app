import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import WhyWeMatter from "./components/WhyWeMatter/WhyWeMatter";
import LeanPitchLabs from "./components/LeanPitchLabs/LeanPitchLabs";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <WhyWeMatter />
      <hr />
      <LeanPitchLabs />
    </div>
  );
}

export default App;
