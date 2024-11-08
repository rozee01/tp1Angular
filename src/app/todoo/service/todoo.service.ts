import { Injectable, signal } from '@angular/core';
import { Todoo, TodooStatus } from '../model/todoo/todoo.model';

@Injectable({
  providedIn: 'root'
})
export class TodooService {

  constructor() { }
  private todos = signal<Todoo[]>([]);

  // Fonction pour obtenir tous les todos d'un statut spécifique
  getTodosByStatus(status: TodooStatus): Todoo[] {
    return this.todos().filter(todo => todo.status === status);
  }

  // Fonction pour ajouter un nouveau todo
  addTodo(name: string, content: string) {
    const newTodo: Todoo = {
      id: Date.now(),  
      name,
      content,
      status: 'waiting',  // Nouveau todo commence avec le statut "waiting"
    };
    this.todos.set([...this.todos(), newTodo]); 
  }

  updateTodoStatus(id: number, status: TodooStatus) {
    const updatedTodos = this.todos().map(todo => 
      todo.id === id ? { ...todo, status } : todo
    );
    this.todos.set(updatedTodos); 
  }

  deleteTodo(id: number) {
    const updatedTodos = this.todos().filter(todo => todo.id !== id);
    this.todos.set(updatedTodos); 
  }
}
