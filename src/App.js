import LandingPage from "./Components/LandingPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Demos from "./Components/Demos.js";
import Features from "./Components/Features.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>

          <Route path="/home" element={<Home />}></Route>
          <Route path="/demos" element={<Demos />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
