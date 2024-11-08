export type TodooStatus = 'waiting' | 'in-progress' | 'done';

export interface Todoo {
  id: number;
  name: string;
  content: string;
  status: TodooStatus;
}
