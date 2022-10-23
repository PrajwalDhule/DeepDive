import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
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
          {/* <Route exact path="/" element={<Landing />}></Route> */}
          {/* <Route exact path="/" element={<Option />}></Route> */}
          <Route exact path="/" element={<Plankton />}></Route>
          {/* <Route exact path="/" element={<LightEffect />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
