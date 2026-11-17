
const progress = [
  { day: "Mon", value: 75 },
  { day: "Tue", value: 50 },
  { day: "Wed", value: 90 },
  { day: "Thu", value: 65 },
  { day: "Fri", value: 100 },
  { day: "Sat", value: 35 },
  { day: "Sun", value: 20 },
];

export default function WeeklyProgress() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-slate-900">
            Weekly Progress
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Your task completion activity
          </p>
        </div>

        <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          +12.5%
        </span>
      </div>

      <div className="mt-8 flex h-36 items-end justify-between gap-3">
        {progress.map((item, index) => (
          <div
            key={item.day}
            className="flex h-full flex-1 flex-col items-center justify-end gap-3"
          >
            <div className="flex w-full flex-1 items-end">
              <div
                className={`w-full rounded-t-lg transition-all ${
                  index === 4 ? "bg-blue-600" : "bg-blue-100"
                }`}
                style={{ height: `${item.value}%` }}
                title={`${item.value}%`}
              />
            </div>

            <span className="text-xs text-slate-400">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">
              Completed this week
            </p>
            <p className="mt-1 text-xl font-bold text-slate-900">
              18 tasks
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">
              Weekly goal
            </p>
            <p className="mt-1 text-xl font-bold text-slate-900">
              75%
            </p>
          </div>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-3/4 rounded-full bg-blue-600" />
        </div>
      </div>
    </section>
  );
}
