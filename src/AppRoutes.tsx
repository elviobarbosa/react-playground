import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUserNew from "./features/register-user/container/RegisterUserNew";
import { SectionCards } from "./shared/components/section-cards";
import MainLayout from "./MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<SectionCards />} />
          <Route path="register-user" element={<RegisterUserNew />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
