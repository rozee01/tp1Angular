export type TodooStatus = 'waiting' | 'in-progress' | 'done';

export class Todoo {
  constructor(
    public id: number,
    public name: string,
    public content: string,
    public status: TodooStatus
  ) {}
}
