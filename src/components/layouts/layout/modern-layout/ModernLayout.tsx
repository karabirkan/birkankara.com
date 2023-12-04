import Header from "../../../ui/header/Header";
import { Outlet } from "react-router-dom";

function ModernLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default ModernLayout;
