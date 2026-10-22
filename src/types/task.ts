

export type Task ={
    id: string;
    title: string;
    subject: string;
    dueDate: string;
    status: "pending" | "completed";
}