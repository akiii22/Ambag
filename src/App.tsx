import OverviewCard from "./components/OverviewCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 md:flex">
      {/* Sidebar */}
      <aside className="w-full bg-slate-900 p-6 text-white md:min-h-screen md:w-64">
        <h1 className="text-2xl font-bold tracking-tight">
          Ambag<span className="text-indigo-400">.</span>
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Your academic life, organized.
        </p>

        <nav className="mt-8 space-y-2">
          <a
            href="#dashboard"
            className="block rounded-lg bg-indigo-600 px-4 py-3 font-medium"
          >
            Dashboard
          </a>

          <a
            href="#subjects"
            className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800"
          >
            My Subjects
          </a>

          <a
            href="#tasks"
            className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800"
          >
            My Tasks
          </a>

          <a
            href="#groups"
            className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800"
          >
            Group Work
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main id="dashboard" className="min-w-0 flex-1 p-6 md:p-10">
        <header className="mb-8">
          <p className="text-sm font-medium text-indigo-600">
            YOUR STUDENT WORKSPACE
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Welcome to Ambag!
          </h2>

          <p className="mt-2 text-slate-500">
            Stay organized, keep making progress, and work better together.
          </p>
        </header>

        {/* Overview cards */}
        <section
          aria-label="Academic overview"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          <OverviewCard title="Pending Assignments" value={0} description="Tasks waiting to be completed" />
          <OverviewCard title="Upcoming Exams" value={0} description="Exams on your schedule" />
          <OverviewCard title="Completed Tasks" value={0} description="Small steps count toward progress" />
        </section>

        {/* Empty state */}
        <section className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center sm:p-12">
          <h3 className="text-lg font-semibold">Your semester starts here</h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Add your subjects and assignments to start organizing your
            academic life in one place.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
