import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUserNew from "./features/register-user/container/RegisterUserNew";
import MainLayout from "./MainLayout";
import MoviesList from "./features/movies/container/movies-list";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<>Início</>} />
          <Route path="register-user" element={<RegisterUserNew />} />
          <Route path="movies" element={<MoviesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
