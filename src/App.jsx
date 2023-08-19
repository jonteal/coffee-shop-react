import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/About/About";
import Catering from "./pages/Catering/Catering";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/home/Home";
import Locations from "./pages/Locations/Locations";
import Menu from "./pages/Menu/Menu";
import Navigation from "./pages/navigation/Navigation";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="catering" element={<Catering />} />
            <Route path="contact" element={<Contact />} />
            <Route path="locations" element={<Locations />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
