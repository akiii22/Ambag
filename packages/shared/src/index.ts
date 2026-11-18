import { z } from "zod";

export const TaskStatusSchema = z.enum([
  "todo",
  "in_progress",
  "completed",
]);

export const TaskPrioritySchema = z.enum([
  "low",
  "medium",
  "high",
]);

export const TaskSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(150),
  description: z.string().max(1000).nullable(),
  status: TaskStatusSchema,
  priority: TaskPrioritySchema,
  dueDate: z.string().datetime().nullable(),
});

export type Task = z.infer<typeof TaskSchema>;

export type TaskStatus = z.infer<typeof TaskStatusSchema>;

export type TaskPriority = z.infer<typeof TaskPrioritySchema>;