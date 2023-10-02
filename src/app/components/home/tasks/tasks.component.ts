import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { SendTasksService } from './../../../services/sendTasks/send-tasks.service';
import { Component } from '@angular/core';
import { taskObject } from 'src/app/interfaces/taskObject';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';

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

  constructor(
    private sendTasksService: SendTasksService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    // Tasks by default (using a custom interface) for test the appication before the use
    // To do
    this.toDo = [
      {
        calendarStart: 'Tue, Oct 10 2023',
        calendarEnd: 'Fri, Oct 11 2023',
        hour: '09:50',
        title: 'Task 1',
        description: 'Description of task 1',
        priority: 'Urgent',
        showDescription: false,
      },
      {
        calendarStart: 'Wed, Oct 11 2023',
        calendarEnd: 'Fri, Oct 13 2023',
        hour: '15:10',
        title: 'Task 2',
        description: 'Description of task 2',
        priority: 'Important',
        showDescription: false,
      },
      {
        calendarStart: 'Thu, Oct 12 2023',
        calendarEnd: 'Fri, Oct 13 2023',
        hour: '13:30',
        title: 'Task 3',
        description: 'Description of task 3',
        priority: 'Not important',
        showDescription: false,
      },
    ];
    // In progress
    this.inProgress = [
      {
        calendarStart: 'Sat, Oct 07 2023',
        calendarEnd: 'Mon, Oct 09 2023',
        hour: '11:20',
        title: 'Task 4',
        description: 'Description of task 4',
        priority: 'Urgent',
        showDescription: false,
      },
      {
        calendarStart: 'Sun, Oct 08 2023',
        calendarEnd: 'Tue, Oct 10 2023',
        hour: '16:30',
        title: 'Task 5',
        description: 'Description of task 5',
        priority: 'Important',
        showDescription: false,
      },
      {
        calendarStart: 'Mon, Oct 09 2023',
        calendarEnd: 'Wed, Oct 11 2023',
        hour: '10:10',
        title: 'Task 6',
        description: 'Description of task 6',
        priority: 'Important',
        showDescription: false,
      },
    ];
    // Done
    this.done = [
      {
        calendarStart: 'Wed, Sep 27 2023',
        calendarEnd: 'Fri, Sep 29 2023',
        hour: '09:40',
        title: 'Task 7',
        description: 'Description of task 7',
        priority: 'Urgent',
        showDescription: false,
      },
      {
        calendarStart: 'Thu, Sep 28 2023',
        calendarEnd: 'Fri, Sep 29 2023',
        hour: '12:30',
        title: 'Task 8',
        description: 'Description of task 8',
        priority: 'Urgent',
        showDescription: false,
      },
      {
        calendarStart: 'Fri, Sep 29 2023',
        calendarEnd: 'Sat, Sep 30 2023',
        hour: '13:10',
        title: 'Task 9',
        description: 'Description of task 9',
        priority: 'Important',
        showDescription: false,
      },
    ];
  }

  // Drop function of Angular CDK using the array of "taskObject[]"
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

  // Edit "to do" task
  editToDoTask(taskToEdit: taskObject, updatedTask: taskObject) {
    // Find the index of the task to edit in the "to do" array
    const index = this.toDo.indexOf(taskToEdit);
    // Check if the task is in the "to do" array
    if (index !== -1) {
      // Update the task with the new data
      this.toDo[index] = updatedTask;
    }
  }

  // Edit "in progress" task
  editInProgressTask(taskToEdit: taskObject, updatedTask: taskObject) {
    // Find the index of the task to edit in the "in progress" array
    const index = this.inProgress.indexOf(taskToEdit);
    // Check if the task is in the "in progress" array
    if (index !== -1) {
      // Update the task with the new data
      this.inProgress[index] = updatedTask;
    }
  }

  // Edit "done" task
  editDoneTask(taskToEdit: taskObject, updatedTask: taskObject) {
    // Find the index of the task to edit in the "done" array
    const index = this.done.indexOf(taskToEdit);
    // Check if the task is in the "done" array
    if (index !== -1) {
      // Update the task with the new data
      this.done[index] = updatedTask;
    }
  }

  // Edit task
  editTask(taskToEdit: taskObject, updatedTask: taskObject, arrayName: string) {
    if (arrayName === 'toDo') {
      this.editToDoTask(taskToEdit, updatedTask);
    } else if (arrayName === 'inProgress') {
      this.editInProgressTask(taskToEdit, updatedTask);
    } else if (arrayName === 'done') {
      this.editDoneTask(taskToEdit, updatedTask);
    }
  }

  // Delete "to do" task
  deleteToDoTask(taskToDelete: taskObject) {
    // Find the index of this object in "to do" array
    const index = this.toDo.indexOf(taskToDelete);
    // Check if the task is in the "to do" array
    if (index !== -1) {
      // "Splice" for delete
      this.toDo.splice(index, 1);
    }
  }

  // Delete "in progress" task
  deleteInProgressTask(taskToDelete: taskObject) {
    // Find the index of this object in "in progress" array
    const index = this.inProgress.indexOf(taskToDelete);
    // Check if the task is in the "in progress" array
    if (index !== -1) {
      // "Splice" for delete
      this.inProgress.splice(index, 1);
    }
  }

  // Delete "done" task
  deleteDoneTask(taskToDelete: taskObject) {
    // Find the index of this object in "done" array
    const index = this.done.indexOf(taskToDelete);
    // Check if the task is in the "done" array
    if (index !== -1) {
      // "Splice" for delete
      this.done.splice(index, 1);
    }
  }

  // Delete dialog and apply the delete functions if the user confirms
  deleteDialog(taskToDelete: taskObject): void {
    // Open dialog
    const dialogRef = this.matDialog.open(MatDialogComponent, {
      // Pass the task you want to delete to the dialog
      data: taskToDelete,
    });
    // Suscribe to the user response
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        // The user confirmed the delete so call the 3 delete functions
        this.deleteToDoTask(taskToDelete);
        this.deleteInProgressTask(taskToDelete);
        this.deleteDoneTask(taskToDelete);
      } else {
        this.matDialog.closeAll();
      }
    });
  }
}
