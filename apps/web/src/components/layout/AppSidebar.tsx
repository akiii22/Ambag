 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

import {
  LayoutDashboard,
  ListTodo,
  BookOpen,
  ClipboardList,
  CalendarDays,
  Bot,
  Settings,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "My Tasks", icon: ListTodo },
  { label: "Subjects", icon: BookOpen },
  { label: "Assignments", icon: ClipboardList },
  { label: "Calendar", icon: CalendarDays },
];

export default function AppSidebar({
  isOpen,
  onClose,
}: AppSidebarProps) {

  const { logout } = useAuth();
const navigate = useNavigate();
const [isSigningOut, setIsSigningOut] = useState(false);

async function handleSignOut() {
  setIsSigningOut(true);

  try {
    await logout();
    navigate("/login", { replace: true });
  } catch {
    // The local session has already been cleared by AuthContext.
    // The server logout may have failed, so inform the user.
    window.alert(
      "Your local session was cleared, but server sign-out failed. Please check your connection and try again.",
    );
    navigate("/login", { replace: true });
  } finally {
    onClose();
    setIsSigningOut(false);
  }
}
  return (
    <>
      {isOpen && (
        <button
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <img
            src="/Ambag-Logo-Desktop.png"
            alt="Ambag - Your Student Workspace"
            className="h-10 max-w-[165px] object-contain object-left"
          />

          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                onClick={onClose}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon size={19} strokeWidth={1.8} />
                {label}
                {active && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-blue-600" />
                )}
              </button>
            ))}
          </nav>

          <div className="my-7 border-t border-slate-100" />

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Assistance
          </p>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50">
            <Bot size={19} strokeWidth={1.8} />
            Ambag AI
            <span className="ml-auto rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
              BETA
            </span>
          </button>

          <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50">
            <Settings size={19} strokeWidth={1.8} />
            Settings
          </button>
        </div>

        <div className="border-t border-slate-100 p-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 hover:bg-slate-50">
            <HelpCircle size={19} />
            Help & Support
          </button>

<button
  onClick={handleSignOut}
  disabled={isSigningOut}
  className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
>
  <LogOut size={19} />
  {isSigningOut ? "Signing out..." : "Sign out"}
</button>

          <p className="mt-4 px-3 text-xs text-slate-400">
            Ambag Workspace · v1.0.0
          </p>
        </div>
      </aside>
    </>
  );
}
