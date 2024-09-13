import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the Angular basics',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Master React',
      summary: 'Learn all React the basics',
      dueDate: '2025-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Svelte',
      summary: 'Learn all the Svelte basics',
      dueDate: '2025-06-31',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
