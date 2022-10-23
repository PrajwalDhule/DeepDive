import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import Atlantic from "./components/Atlantic";
import "./styles/landing.css";
import "./styles/global.css";
import "./styles/options.css";
import "./styles/atlantic.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/atlantic" element={<Atlantic />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
