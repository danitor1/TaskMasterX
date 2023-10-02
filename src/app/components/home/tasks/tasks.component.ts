import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { SendTasksService } from './../../../services/sendTasks/send-tasks.service';
import { Component } from '@angular/core';
// Interface
import { taskObject } from 'src/app/interfaces/taskObject';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  // Properties with taskObject[] interface for the lists
  toDo: taskObject[] = [];
  inProgress: taskObject[] = [];
  done: taskObject[] = [];

  // Property for show description
  showDescription!: boolean;

  constructor(private sendTasksService: SendTasksService) {}

  ngOnInit() {
    // Tasks by default (using a custom interface) for test the appication before the use
    this.toDo = [
      {
        calendar: 'Tue, Oct 10 2023',
        hour: '09:50',
        title: 'Task 1',
        description: 'Description of task one',
        priority: 'Urgent',
        showDescription: false,
      },
      {
        calendar: 'Wed, Oct 11 2023',
        hour: '15:10',
        title: 'Task 2',
        description: 'Description of task two',
        priority: 'Important',
        showDescription: false,
      },
      {
        calendar: 'Thu, Oct 12 2023',
        hour: '13:30',
        title: 'Task 3',
        description: 'Description of task three',
        priority: 'Not important',
        showDescription: false,
      },
    ];
    this.inProgress = [
      {
        calendar: 'Sat, Oct 07 2023',
        hour: '11:20',
        title: 'Task 4',
        description: 'Description of task four',
        priority: 'Urgent',
        showDescription: false,
      },
      {
        calendar: 'Sun, Oct 08 2023',
        hour: '16:30',
        title: 'Task 5',
        description: 'Description of task five',
        priority: 'Important',
        showDescription: false,
      },
      {
        calendar: 'Mon, Oct 09 2023',
        hour: '10:10',
        title: 'Task 6',
        description: 'Description of task six',
        priority: 'Important',
        showDescription: false,
      },
    ];
    this.done = [
      {
        calendar: 'Wed, Sep 27 2023',
        hour: '09:40',
        title: 'Task 7',
        description: 'Description of task seven',
        priority: 'Urgent',
        showDescription: false,
      },
      {
        calendar: 'Thu, Sep 28 2023',
        hour: '12:30',
        title: 'Task 8',
        description: 'Description of task eight',
        priority: 'Urgent',
        showDescription: false,
      },
      {
        calendar: 'Fri, Sep 29 2023',
        hour: '13:10',
        title: 'Task 9',
        description: 'Description of task nine',
        priority: 'Important',
        showDescription: false,
      },
    ];
  }

  // Drop function using the interface "taskObject[]"
  drop(event: CdkDragDrop<taskObject[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // Open or close description
  openOrCloseDescription(item: taskObject) {
    // Change to true or false
    item.showDescription = !item.showDescription;
  }
}
