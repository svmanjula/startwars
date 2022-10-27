import CardInfo from "./Components/CardInfo";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Fav from "./Components/Fav";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/details" element={<CardInfo />} />
        <Route exact path="*" element={<Home />} />
        <Route exact path="/WhishList" element={<Fav/>} />
      </Routes>
    </div>
  );
}

export default App;
