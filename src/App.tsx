import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WorkoutPage from "./Pages/WorkoutPlan";
import WorkoutPage2 from "./Pages/WorkoutPage2";
import WorkoutPage3 from "./Pages/WorkoutPage3";
import QRCodePage from "./Pages/QRpage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/workout1" element={<WorkoutPage />} />
        <Route path="/workout2" element={<WorkoutPage2 />} />
        <Route path="/workout3" element={<WorkoutPage3 />} />
        <Route path="/qrcodes" element={<QRCodePage />} /> {/* QR Code Page */}
      </Routes>
    </Router>
  );
};

export default App;
