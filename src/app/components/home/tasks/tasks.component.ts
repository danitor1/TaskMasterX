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
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
  ];
  inProgress: taskObject[] = [
    { id: 4, name: 'Tornado' },
    { id: 5, name: 'Mr. O' },
    { id: 6, name: 'Tomato' },
  ];
  done: taskObject[] = [
    { id: 7, name: 'Paner' },
    { id: 8, name: 'Soletsc' },
    { id: 9, name: 'Marenostru' },
  ];
}
