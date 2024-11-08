import { Component, computed, signal } from '@angular/core';
import { Todoo, TodooStatus } from '../model/todoo/todoo.model';
import { TodooService } from '../service/todoo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todoo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todoo.component.html',
  styleUrl: './todoo.component.css'
})
export class TodooComponent {
  name = signal('');
  content = signal('');

  waitingTodos = computed(() => this.todoService.getTodosByStatus('waiting'));
  inProgressTodos = computed(() => this.todoService.getTodosByStatus('in-progress'));
  doneTodos = computed(() => this.todoService.getTodosByStatus('done'));

  constructor(private todoService: TodooService) {}

  addTodo() {
    this.todoService.addTodo(this.name(), this.content());
    this.name.set('');
    this.content.set('');
  }

  changeStatus(todo: Todoo, newStatus: TodooStatus) {
    this.todoService.updateTodoStatus(todo.id, newStatus);
  }

}
