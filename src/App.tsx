import {  Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AboutMe } from "./pages/AboutMe";
import { Education } from "./pages/Education";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/projects/Projects";
import { Skills } from "./pages/Skills";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/home" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
