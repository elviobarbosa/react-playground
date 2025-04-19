import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUserNew from "./features/register-user/container/RegisterUserNew";
import MainLayout from "./MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<>Início</>} />
          <Route path="register-user" element={<RegisterUserNew />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
