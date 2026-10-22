
import type { ReactNode } from "react";
import {
  LayoutDashboard,
  BookOpen,
  ListChecks,
  Users,
} from "lucide-react";

type AppLayoutProps = {
  children: ReactNode;
};

const navigationItems = [
  {
    label: "Dashboard",
    href: "#dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Subjects",
    href: "#subjects",
    icon: BookOpen,
  },
  {
    label: "My Tasks",
    href: "#tasks",
    icon: ListChecks,
  },
  {
    label: "Group Work",
    href: "#groups",
    icon: Users,
  },
];

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 md:flex">
      <aside className="flex w-full flex-col bg-slate-950 p-5 text-white md:min-h-screen md:w-64 md:shrink-0">
        <a href="#dashboard" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold shadow-lg shadow-blue-950/30">
            A
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Ambag<span className="text-blue-400">.</span>
            </h1>
            <p className="text-xs text-slate-400">
              Your student workspace
            </p>
          </div>
        </a>

        <div className="mt-9">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Workspace
          </p>

          <nav aria-label="Main navigation" className="space-y-1">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === 0;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "flex items-center gap-3 rounded-xl bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-950/20"
                      : "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  }
                >
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="shrink-0"
                  />

                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm font-semibold">One step at a time.</p>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Organize your workload, track your progress, and work better together.
          </p>
        </div>

        <div className="mt-auto hidden border-t border-slate-800 pt-5 md:block">
          <p className="text-xs text-slate-500">
            AMBAG · STUDENT WORKSPACE
          </p>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-7xl px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
