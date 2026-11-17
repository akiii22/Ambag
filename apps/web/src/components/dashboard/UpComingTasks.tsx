
import { ArrowRight, Clock3 } from "lucide-react";

const tasks = [
  {
    title: "Research Paper: Artificial Intelligence",
    subject: "Computer Science",
    date: "Today, 11:59 PM",
    priority: "High",
    color: "bg-rose-50 text-rose-700",
  },
  {
    title: "Database Normalization Exercise",
    subject: "Database Management",
    date: "Tomorrow, 9:00 AM",
    priority: "Medium",
    color: "bg-amber-50 text-amber-700",
  },
  {
    title: "React Application Prototype",
    subject: "Web Development",
    date: "Nov 20, 2026",
    priority: "Low",
    color: "bg-emerald-50 text-emerald-700",
  },
];

export default function UpcomingTasks() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-slate-900">
            Upcoming Tasks
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Stay on top of your deadlines
          </p>
        </div>

        <button className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
          View all <ArrowRight size={15} />
        </button>
      </div>

      <div className="space-y-5">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-start gap-3 border-b border-slate-100 pb-5 last:border-0 last:pb-0"
          >
            <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-800">
                  {task.title}
                </h3>

                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${task.color}`}
                >
                  {task.priority}
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                {task.subject}
              </p>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                <Clock3 size={14} />
                {task.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
