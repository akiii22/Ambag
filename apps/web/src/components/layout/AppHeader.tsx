
import { Bell, Menu, Search } from "lucide-react";

interface AppHeaderProps {
  onMenuClick: () => void;
}

export default function AppHeader({
  onMenuClick,
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
        >
          <Menu size={21} />
        </button>

        <div>
          <p className="text-sm font-semibold text-slate-800">
            Student Workspace
          </p>
          <p className="hidden text-xs text-slate-400 sm:block">
            Manage your academic life in one place
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <button
          aria-label="Search"
          className="hidden rounded-xl border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50 sm:block"
        >
          <Search size={19} />
        </button>

        <button
          aria-label="Notifications"
          className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-50"
        >
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-blue-600" />
        </button>

        <div className="flex items-center gap-3 border-l border-slate-200 pl-3 sm:pl-5">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-800">
              Alex Morgan
            </p>
            <p className="text-xs text-slate-400">Student</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
            AM
          </div>
        </div>
      </div>
    </header>
  );
}
