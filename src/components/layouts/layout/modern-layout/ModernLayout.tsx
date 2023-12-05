import { Footer } from "../../../ui/footer/Footer";
import Header from "../../../ui/header/Header";
import { Outlet } from "react-router-dom";

function ModernLayout() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default ModernLayout;
