import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import FicheLogement from "./pages/FicheLogement/FicheLogement.jsx";
import Error from "./pages/Error/Error.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx"; 

const HomeLayout = ({ children }) => {
  return <div>{children}</div>;
};

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        }
      >
        <Route
          index
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Router;
