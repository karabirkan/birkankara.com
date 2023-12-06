// routes.js
import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import ModernLayout from "../components/layouts/layout/modern-layout/ModernLayout";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import About from "../pages/about/About";
import { NotFoundImage } from "../pages/notfound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ModernLayout />,
    errorElement: <NotFoundImage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
