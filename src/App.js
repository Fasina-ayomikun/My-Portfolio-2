import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
