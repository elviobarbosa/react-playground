import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUserNew from "./features/register-user/container/RegisterUserNew";
import MainLayout from "./MainLayout";
import MoviesList from "./features/movies/container/movies-list";
import AboutProjectComponent from "./features/about/components/about-project";
import AboutElvioComponent from "./features/about/components/about-elvio";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AboutProjectComponent />} />
          <Route path="about" element={<AboutProjectComponent />} />
          <Route path="register-user" element={<RegisterUserNew />} />
          <Route path="movies" element={<MoviesList />} />
          <Route path="curriculum" element={<AboutElvioComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
