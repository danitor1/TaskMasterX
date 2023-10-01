import { Component } from '@angular/core';
// Interface
import { taskObject } from 'src/app/interfaces/taskObject';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  // Tasks by default (using a custom interface)
  toDo: taskObject[] = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
  ];
  inProgress: taskObject[] = [
    { id: 4, title: 'Task 4' },
    { id: 5, title: 'Task 5' },
    { id: 6, title: 'Task 6' },
  ];
  done: taskObject[] = [
    { id: 7, title: 'Task 7' },
    { id: 8, title: 'Task 8' },
    { id: 9, title: 'Task 9' },
  ];
}
