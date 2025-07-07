import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./UI/pages/Home";
import About from "./UI/pages/About";
import Detail from "./UI/pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
