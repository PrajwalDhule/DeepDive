import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import Atlantic from "./components/Atlantic";
import "./styles/landing.css";
import "./styles/global.css";
import "./styles/options.css";
import "./styles/atlantic.css";

import LightEffect from "./components/Lighteffect";
import Option from "./components/Option";
import Plankton from "./components/Plankton";
import Cursor from "./components/Cursor";
import "./styles/landing.css";
import "./styles/global.css";
import "./styles/options.css";
import "./styles/light.css";
import "./styles/option.css";
import "./styles/plankton.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/option" element={<Option />}></Route>
          <Route exact path="/plankton" element={<Plankton />}></Route>
          <Route exact path="/light" element={<LightEffect />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/atlantic" element={<Atlantic />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
