import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingQuery } from "./shared/components/loading-query";

import { lazyWithLoader } from "./shared/lib/lazy-loading.utils";
const MainLayout = lazyWithLoader(() => import("./MainLayout"));
const MoviesIndexComponent = lazyWithLoader(
  () => import("./features/movies/container/movies-index")
);
const AboutProjectComponent = lazyWithLoader(
  () => import("./features/about/components/about-project")
);
const AboutElvioComponent = lazyWithLoader(
  () => import("./features/about/components/about-elvio")
);
const RegisterUserNewComponent = lazyWithLoader(
  () => import("./features/register-user/container/register-user-new")
);

function AppRoutes() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LoadingQuery />
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
