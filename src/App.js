import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import FicheLogement from "./pages/FicheLogement/FicheLogement.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Error from "./pages/Error/Error.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
