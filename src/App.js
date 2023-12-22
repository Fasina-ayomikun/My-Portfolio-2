import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { ToastContainer } from "react-toastify";
import Error from "./pages/Error";
function App() {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        draggable
        theme='dark'
        closeOnClick
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
