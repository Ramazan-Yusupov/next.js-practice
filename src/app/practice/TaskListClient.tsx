"use client";

import { Button } from "@/shared/ui";
import { useState } from "react";

// Тип задачи (подставь свой из shared/types)
type Task = { id: string; title: string; done: boolean };

export function TaskListClient({ initialTasks }: { initialTasks: Task[] }) {
  // Инициализируем состояние данными, пришедшими с сервера
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isPending, setIsPending] = useState(false);

  const handleToggle = (id: string) => {
    // В будущем здесь будет вызов Server Action для обновления БД
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const handleRefetch = async () => {
    setIsPending(true);
    // Имитация рефетча (в Next.js лучше использовать revalidatePath)
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsPending(false);
    window.location.reload(); // Простой способ для практики, позже заменим на revalidatePath
  };

  return (
    <>
      <Button
        onClick={handleRefetch}
        disabled={isPending}
        title="Refetch"
        className="mb-4"
      >
        {isPending ? "Загрузка..." : "Обновить"}
      </Button>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border-b flex justify-between items-center"
          >
            <div
              className={`${task.done ? "line-through text-green-500" : ""}`}
            >
              {task.title}
            </div>
            <button
              onClick={() => handleToggle(task.id)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              {task.done ? "Вернуть" : "Выполнить"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
