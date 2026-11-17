
import {
  BookOpen,
  CheckCircle2,
  ClipboardList,
  ListTodo,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import StatCard from "../components/dashboard/StatCard";
import UpcomingTasks from "../components/dashboard/UpComingTasks";
import WeeklyProgress from "../components/dashboard/WeeklyProgress";

const stats = [
  {
    title: "Pending Tasks",
    value: 12,
    description: "Tasks waiting for completion",
    icon: ListTodo,
    iconColor: "text-blue-600",
    iconBackground: "bg-blue-50",
  },
  {
    title: "Completed Tasks",
    value: 28,
    description: "Great job keeping up!",
    icon: CheckCircle2,
    iconColor: "text-emerald-600",
    iconBackground: "bg-emerald-50",
  },
  {
    title: "Assignments",
    value: 4,
    description: "Upcoming submissions",
    icon: ClipboardList,
    iconColor: "text-violet-600",
    iconBackground: "bg-violet-50",
  },
  {
    title: "My Subjects",
    value: 6,
    description: "Active academic subjects",
    icon: BookOpen,
    iconColor: "text-amber-600",
    iconBackground: "bg-amber-50",
  },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] space-y-8 p-4 sm:p-6 lg:p-8">
      {/* Welcome section */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Monday, November 17, 2026
          </p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Good morning, Alex! <span>👋</span>
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Here's what's happening with your academics today.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700">
          <ListTodo size={18} />
          Create a task
        </button>
      </section>

      {/* AI recommendation */}
      <section className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-white p-3 text-blue-600 shadow-sm">
            <Sparkles size={22} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Make your day more productive
            </p>

            <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">
              You have 2 deadlines approaching. Organize your
              study time and stay ahead of your assignments.
            </p>
          </div>
        </div>

        <button className="flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
          Explore study planner
          <ArrowRight size={17} />
        </button>
      </section>

      {/* Statistics */}
      <section>
        <div className="mb-4">
          <h2 className="font-semibold text-slate-900">
            Your Overview
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            A snapshot of your academic activities
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </section>

      {/* Main dashboard content */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_1fr]">
        <UpcomingTasks />
        <WeeklyProgress />
      </section>

      <footer className="border-t border-slate-200 pt-5 text-center text-xs text-slate-400">
        Stay organized. Keep learning. Keep growing.
        <span className="ml-1 font-semibold text-blue-600">
          Ambag.
        </span>
      </footer>
    </main>
  );
}
