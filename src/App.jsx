import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Frontend/Pages/Home/Home";
import LogIn from "./Frontend/Components/LogIn/LogIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
