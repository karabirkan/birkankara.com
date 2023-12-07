// routes.js
import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import ModernLayout from "../components/layouts/layout/modern-layout/ModernLayout";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import Resume from "../components/ui/resume-card/ResumeCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ModernLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/resume", element: <Resume /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
