import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.page";
import About from "./pages/About.page";
import Users from "./pages/Users.page";
import NotFound from "./pages/NotFound.page";
import Navigation from "./components/navigation/navigation.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users/:id" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Navigation />
    </BrowserRouter>
  );
}

export default App;
