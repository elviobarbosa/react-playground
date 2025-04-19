import { Outlet } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "./shared/components/ui/sidebar";
import { AppSidebar } from "./shared/components/app-sidebar";
import { SiteHeader } from "./shared/components/site-header";
import { TitleProvider } from "./shared/lib/context/TitleContext";

export default function MainLayout() {
  return (
    <TitleProvider>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2 px-8">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <Outlet />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TitleProvider>
  );
}
