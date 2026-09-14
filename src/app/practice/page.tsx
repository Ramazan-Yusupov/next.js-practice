import { fetchTasks } from "../shared/lib/tasksApi";
import { Card } from "../shared/ui";
import { TaskListClient } from "./TaskListClient";

export default async function PracticePage() {
  // Серверный фетчинг задач
  const tasks = await fetchTasks();

  return (
    <Card
      border="2px"
      maxWidth="2xl"
      className="overflow-y-scroll scrollbar-none h-[calc(100vh-400px)] p-4"
    >
      <TaskListClient initialTasks={tasks} />
    </Card>
  );
}
