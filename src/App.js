import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import "./styles/landing.css";
import "./styles/global.css";
import "./styles/options.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
