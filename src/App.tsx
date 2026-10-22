import AppLayout from "./components/AppLayout";
import OverviewCard from "./components/OverviewCard";
import TaskList from "./components/TaskList";
import { tasks } from "./data/tasks";

function App() {
  return (
    <AppLayout>
      <section
  aria-label="Academic overview"
  className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
>
         <OverviewCard title="Pending Assignments" value={0} description="Tasks waiting to be completed" />
          <OverviewCard title="Upcoming Exams" value={0} description="Exams on your schedule" />
          <OverviewCard title="Completed Tasks" value={0} description="Small steps count toward progress" />
          </section>
        <div className="mt-8">
  <TaskList tasks={tasks} />
</div>

    </AppLayout>
  );
}

export default App;
