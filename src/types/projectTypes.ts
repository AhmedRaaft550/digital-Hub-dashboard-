export type ProjectStatus = "Completed" | "In Progress" | "On Hold";

export interface UserTypes {
  id: number;
  name: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  desc: string;
}
