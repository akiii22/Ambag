
import {
  CheckCircle2,
  ClipboardList,
  CalendarDays,
} from "lucide-react";
import type { Task } from "../types/task";

type TaskListProps = {
  tasks: Task[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <section id="tasks" className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            My Tasks
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Keep track of your academic workload.
          </p>
        </div>

        <span className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
        </span>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
            <ClipboardList
              size={32}
              strokeWidth={1.5}
              className="mx-auto text-slate-400"
            />
            <h3 className="mt-3 font-semibold text-slate-900">
              No tasks yet
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Your assignments and deadlines will appear here.
            </p>
          </div>
        ) : (
          tasks.map((task) => {
            const isCompleted = task.status === "completed";

            return (
              <article
                key={task.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md sm:p-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
                      isCompleted
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                    aria-hidden="true"
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={22} strokeWidth={1.8} />
                    ) : (
                      <ClipboardList size={22} strokeWidth={1.8} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`font-semibold ${
                        isCompleted
                          ? "text-slate-500 line-through"
                          : "text-slate-900"
                      }`}
                    >
                      {task.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {task.subject}
                    </p>

                    <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                      <CalendarDays size={14} />
                      Due: {task.dueDate}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${
                      isCompleted
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {isCompleted ? "Completed" : "Pending"}
                  </span>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
};

export default TaskList;

