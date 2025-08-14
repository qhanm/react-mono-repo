import Footer from "@ui/components/layout/footer";
import Header from "@ui/components/layout/header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
