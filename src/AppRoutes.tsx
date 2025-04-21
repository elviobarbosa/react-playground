import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import AboutProjectComponent from "./features/about/components/about-project";
import AboutElvioComponent from "./features/about/components/about-elvio";
import RegisterUserNewComponent from "./features/register-user/container/register-user-new";
import MoviesIndexComponent from "./features/movies/container/movies-index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function AppRoutes() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<AboutProjectComponent />} />
            <Route path="about" element={<AboutProjectComponent />} />
            <Route
              path="register-user"
              element={<RegisterUserNewComponent />}
            />
            <Route path="movies" element={<MoviesIndexComponent />} />
            <Route path="curriculum" element={<AboutElvioComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default AppRoutes;
