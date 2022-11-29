// import logo from './logo.svg';
import "./src/App.css";
import Nav from "./src/components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./src/components/About";
import Projects from "./src/components/Projects";
import Footer from "./src/components/footer";
import Contact from "./src/components/Contact";
import Resume from "./src/components/Resume";

function App() {
  return (
    <Router>
      <div className="main-flex">
        <Nav />
        <div className="flex-grow">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
