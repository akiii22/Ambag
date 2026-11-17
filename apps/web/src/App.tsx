
import { useState } from "react";

import AppSidebar from "./components/layout/AppSidebar";
import AppHeader from "./components/layout/AppHeader";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <AppSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="min-w-0 flex-1">
        <AppHeader
          onMenuClick={() => setSidebarOpen(true)}
        />

        <DashboardPage />
      </div>
    </div>
  );
}
