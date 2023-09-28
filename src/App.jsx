import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About } from "./pages/about/About";
import Catering from "./pages/catering/Catering";
import Contact from "./pages/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Home from "./pages/home/Home";
import Locations from "./pages/locations/Locations";
import Menu from "./pages/menu/Menu";
import Navigation from "./pages/navigation/Navigation";

import "./App.css";

function App() {
  return (
    <>
      <Header />
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
