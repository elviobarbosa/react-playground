import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";
const MoviesIndexComponent = lazy(() => import("./features/movies/container/movies-index"));
const AboutProjectComponent = lazy(() => import("./features/about/components/about-project"));
const AboutElvioComponent  = lazy(() => import("./features/about/components/about-elvio"));
const RegisterUserNewComponent =  lazy(() => import("./features/register-user/container/register-user-new"));

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
