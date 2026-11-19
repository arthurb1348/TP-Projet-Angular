import { Component, inject, signal } from '@angular/core';
import type { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { Task } from '../../../models/task.model';
import { TaskPromiseService } from '../../../services/task-promise.service';

@Component({
  selector: 'app-task-list-fb-exercice',
  imports: [FormsModule],
  templateUrl: './task-list-fb-exercice.html',
})
export class TaskListFbExercice implements OnInit {
  private readonly taskService = inject(TaskPromiseService);

  tasks = signal<Task[]>([]);
  newTaskTitle = signal('');

  ngOnInit(): void {
    void this.loadTasks();
  }

  async loadTasks(): Promise<void> {
    try {
      const tasks = await this.taskService.getTasks();

      this.tasks.set(tasks);
    } catch (error) {
      console.error('Erreur lors du chargement des tâches :', error);
    }
  }

  async addTask(): Promise<void> {
    const title = this.newTaskTitle().trim();

    if (!title) {
      return;
    }

    const task: Task = {
      title,
      status : 'pending',
    };

    try {
      await this.taskService.addTask(task);

      this.newTaskTitle.set('');

      await this.loadTasks();
    } catch (error) {
      console.error("Erreur lors de l'ajout de la tâche :", error);
    }
  }

  async toggleStatus(task: Task): Promise<void> {
    const updatedTask: Task = {
      ...task,
      status: task.status === 'pending' ? 'completed' : 'pending',
    };

    try {
      await this.taskService.updateTask(updatedTask);

      await this.loadTasks();
    } catch (error) {
      console.error('Erreur lors du changement de statut :', error);
    }
  }

  async deleteTask(taskId: string): Promise<void> {
    try {
      await this.taskService.deleteTask(taskId);

      await this.loadTasks();
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche :', error);
    }
  }
}
